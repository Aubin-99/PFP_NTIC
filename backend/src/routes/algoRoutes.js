module.exports = app => {
    const algo = require("../controllers/algoController.js");
    var router = require("express").Router();

    router.get("/:word", algo.predict);

    app.use('/algo', router);
}