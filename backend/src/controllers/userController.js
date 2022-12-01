const User = require("../models/userModel.js");

// GET Requests
exports.getFavPicto = (req, res) => {
    User.getFavPicto(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find fav picto of user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving fav picto of user with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.getAll = (req, res) => {
    User.getAll((error, data) => {
        if (error) {
            res.status(500).send({
                message:
                    error.message || `An error occured while retrieving pictograms`
            });
        } else {
            res.send(data);
        }
    });
};

// POST Requests

exports.add = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new user out of an empty request body`
        });
    }
    const user = new User({
        Name: req.body.Name,
        FirstName: req.body.FirstName,
        DateOfBirth: req.body.DateOfBirth,
        Gender: req.body.Gender
    });
    User.add(user, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while creating the new pictogram`
            });
        } else {
            res.send(data);
        }
    });
};

exports.updateCanDeleteFavPicto = (req, res) => {
    // Validate Request
    User.updateCanDeleteFavPicto(
      req.params.id,
      req.params.permission,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Tutorial with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};

exports.updateCanDeleteFavSentence = (req, res) => {
    User.updateCanDeleteFavSentence(
      req.params.id,
      req.params.permission,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Tutorial with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
};

// ???? à supp ?
/*exports.getFavPicto = (req, res) => {
    User.getFavPicto(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find fav picto of user with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving fav picto of user with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};*/
