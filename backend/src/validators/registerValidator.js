const expressValidator = require("express-validator");
const express = require("express");

const validator = () => {

}

validator.registerArgumentsValidator = () => [
    expressValidator.body("email", 'This email is not valid').isEmail(),
    expressValidator.body('password', 'This password is not valid').matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        'i'
    )
];

validator.validate = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (errors.isEmpty()) return next();
    return res.status(422).json(errors.array().map((error) => error.msg));
};

module.exports = validator;