const Pictogram = require("../models/pictogramModel.js");
const path = require('path');
const imgbbUploader = require("imgbb-uploader");

// GET Requests

exports.getAll = (req, res) => {
    Pictogram.getAll((error, data) => {
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

exports.getById = (req, res) => {
    Pictogram.getById(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the pictogram with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving pictogram with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.getByCategory = (req, res) => {
    Pictogram.getByCategory(req.params.idCategory, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find picto from category: ${req.params.idCategory}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving picto from category: ${req.params.idCategory}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

// POST Requests

exports.add = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new pictogram out of an empty request body`
        });
    }
    const pictogram = new Pictogram({
        name: req.body.name,
        url: req.body.url
    });
    Pictogram.add(pictogram, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while creating the new pictogram`
            });
        } else {
            res.send(data);
        }
    });
};


exports.uploadSingle = async(req, res, err) => {
    const file = req.file;

    if (!file.filename.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        res.status(400).send({ message: 'Only image files (jpg, jpeg, png) are allowed!'});
    }

    const pictogram = new Pictogram({
        name: file.originalname,
        idCategory: 19,
        url: file.filename
    });

    Pictogram.add(pictogram, (err, data) => {
        if (err) {
            res.status(500).send({
                message: error.message || `An error occured while uploading pictogram`
            });
        } else {
            res.send({ data: data, msg: "Successful"});
        }
    });
};

exports.upload = async(req, res, err) => {
    const files = req.files;
    var errorOccured = false;
    var resultData = [];

    for (var i = 0; i < files.length; i++){
        var file = files[i];
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            res.send({ msg: 'Only image files (jpg, jpeg, png) are allowed!'});
        }
    }

    const launchQueries = async _ => {
        for (var i = 0; i < files.length; i++){
            var file = files[i];

            var name = path.parse(file.originalname).name;
            // remove number at the beginning (in case of pattern "1- blablabla")
            name = name.substring(name.indexOf("-") + 1).trim();

            var url = file.filename;

            const pictogram = new Pictogram({
                name: name,
                idCategory: 0,
                url: url
            });
    
            await Pictogram.add(pictogram, (err, data) => {
                if (err) {
                    errorOccured = true;
                } else {
                    resultData.push(data);
                }
            });

            if (errorOccured)
                break;
        }
    }

    await launchQueries();

    if (errorOccured){
        res.status(500).send({
            msg: error.message || `An error occured while uploading pictogram`
        });
    } else {
        res.send({
            data: resultData,
            msg: "Picto uploaded!"
        });
    }
};

exports.addBase64 = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new pictogram out of an empty request body`
        });
    }
    imgbbUploader({apiKey: "d628a8c4425a2a7fb8662c9d76f2bbf9", base64string: req.body.url})
    .then((response) => {
        const pictogram = new Pictogram({
            name: req.body.name,
            url: response.display_url
        });
        Pictogram.add(pictogram, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `An error occured while creating the new pictogram`
            });
        } else {
            res.send(data);
        }
    });
    })
    .catch((error) => console.log(error));
};

// DELETE Requests

exports.delete = (req, res) => {
    Pictogram.delete(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the pictogram with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured deleting pictogram with id: ${req.params.id}`
                });
            }
        } else {
            res.send({message: `Pictogram with id ${req.params.id} has been successfully deleted`});
        }
    });
};