const Algo = require("../models/algoModel.js");

// GET Requests
exports.predict = (req, res) => {
    Algo.predict(req.params.word, (error, data) => {
        if (error) {
            res.status(404).send({
                message: `Couldn't predict for the word: ${req.params.word}`
            });
        } else {
            res.send(data);
        }
    });
};