module.exports = app => {
    const educator = require("../controllers/educatorController.js");
    const authMiddleware = require("../middlewares/authenticationMiddleware.js");
    const validator = require("../validators/registerValidator.js");
    var router = require("express").Router();

    router.get("/", educator.getCurrent);
    router.post("/register", validator.registerArgumentsValidator(), validator.validate, educator.register);
    router.post("/login", educator.login);

    app.use('/authentication', router);
}   