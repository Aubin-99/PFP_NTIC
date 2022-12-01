const userFavSentence = require("../models/userFavSentenceModel.js");

// GET
exports.getByUserId = (req, res) => {
    userFavSentence.getByUserId(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find result with user id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving fav sentences of user with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

// POST
exports.add = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new sentence to fav out of an empty request body`
        });
    }

    userFavSentence.getLastIndex().then(function(data){
        var nextId = data.maxId + 1;
        // Cannot add multiple rows using objects... so we send data as array of arrays
        const rowsForNewFavSentence = [];
        for (var i = 0; i < req.body.length; i++){
            /*rowsForNewFavSentence.push(new userFavSentence({
                idUser: parseInt(req.params.id),
                idPictogram: req.body[i].id,
                order: i
            }))*/
            rowsForNewFavSentence.push([
                nextId + 1,
                parseInt(req.params.id), 
                i,
                req.body[i].id
            ])
        }

        userFavSentence.add(rowsForNewFavSentence, (error, data) => {
            if (error) {
                res.status(500).send({
                    message: error.message || `An error occured while adding the new user fav sentence`
                });
            } else {
                res.send(data);
            }
        });

    }).catch(function (err){
        console.log("Error: " + err)
    })
};

exports.delete = (req, res) => {
    userFavSentence.delete(req.params.id, req.params.idsentence, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the sentence with id: ${req.params.idsentence} for user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured deleting fav sentence with id: ${req.params.idsentence} for user with id: ${req.params.id}`
                });
            }
        } else {
            res.send({message: `Fav sentence with id ${req.params.idsentence} for user with id ${req.params.id} has been successfully deleted`});
        }
    });
};