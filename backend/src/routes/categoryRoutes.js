module.exports = app => {
    const category = require("../controllers/categoryController.js");
    var router = require("express").Router();

    router.get("/", category.getAll);  
    
    app.use('/category', router);
}