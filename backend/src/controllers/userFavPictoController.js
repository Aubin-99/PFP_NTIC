const userFavPicto = require("../models/userFavPictoModel.js");

// POST
exports.add = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: `Can't add a new pictogram to user out of an empty request body`
        });
    }
    const favPicto = new userFavPicto({
        idUser: req.params.id,
        idPictogram: req.body.id
    });
    userFavPicto.add(favPicto, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while adding a pictogram to user`
            });
        } else {
            res.send(data);
        }
    });
};

exports.delete = (req, res) => {
    userFavPicto.delete(req.params.id, req.params.idpicto, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the pictogram with id: ${req.params.idpicto} for user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured deleting fav pictogram with id: ${req.params.idpicto} for user with id: ${req.params.id}`
                });
            }
        } else {
            res.send({message: `Fav pictogram with id ${req.params.idpicto} for user with id ${req.params.id} has been successfully deleted`});
        }
    });
};