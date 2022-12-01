module.exports = app => {
    const pictogram = require("../controllers/pictogramController.js");
    const authMiddleware = require("../middlewares/authenticationMiddleware.js");
    var router = require("express").Router();

    router.get("/", pictogram.getAll);         // Retrieve all pictograms
    router.get("/:id", pictogram.getById);     // Retrieve pictogram with given ID
    router.post("/", pictogram.add);           // Add a new pictogram to the SQL table using URL
    router.post("/photo", pictogram.addBase64);           // Add a new pictogram to the SQL table using image
    router.delete("/:id", pictogram.delete);   // Delete the pictogram with given ID from the SQL table
    router.get("/category/:idCategory", pictogram.getByCategory);   

    app.use('/pictograms', router);
    //app.use('/pictograms', AuthMiddleware.mustBeAuthenticated, router);
}