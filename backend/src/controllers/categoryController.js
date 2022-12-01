const Category = require("../models/categoryModel.js");
const path = require('path');

exports.getAll = (req, res) => {
    Category.getAll((error, data) => {
        if (error) {
            res.status(500).send({
                message:
                    error.message || `An error occured while retrieving categories`
            });
        } else {
            res.send(data);
        }
    });
};

