module.exports = app => {
    const user = require("../controllers/userController.js");
    const userFavPicto = require("../controllers/userFavPictoController.js");
    const userFavSentence = require("../controllers/userFavSentenceController.js");
    const authMiddleware = require("../middlewares/authenticationMiddleware.js");
    var router = require("express").Router();

    router.get("/:id/favpicto", user.getFavPicto);                              // Retrieve fav picto of user with given id
    router.post("/:id/favpicto/add", userFavPicto.add);                         // Add a picto to fav of user with given id
    router.delete("/:id/favpicto/:idpicto/delete/", userFavPicto.delete);
    router.get("/:id/favsentence", userFavSentence.getByUserId);                // Get fav sentences of user with given id
    router.get("/", user.getAll);
    router.post("/", user.add);
    router.put("/:id/pictogram/:permission", user.updateCanDeleteFavPicto);     
    router.put("/:id/sentence/:permission", user.updateCanDeleteFavSentence);         
    router.post("/:id/favsentence/add", userFavSentence.add);   // Add a sentence to fav of user with given id
    router.delete("/:id/favsentence/:idsentence/delete/", userFavSentence.delete);     

    app.use('/user', router);
    //app.use('/user', AuthMiddleware.mustBeAuthenticated, router);
}