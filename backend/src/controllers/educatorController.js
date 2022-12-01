const Educator = require("../models/educatorModel.js");
const JWT = require("../utils/authenticationServices.js");
const bcrypt = require("bcrypt");

const hashPassword = (password) => {
    return bcrypt.hash(password, 10);
};

// POST Requests
exports.register = async (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't create a new educator out of an empty request body`
        });
    } else if (req.body.password){
        const hashedPassword = await hashPassword(req.body.password);
        const educator = new Educator({
            name: req.body.name,
            firstName: req.body.firstName,
            email: req.body.email,
            password: hashedPassword
        });
        Educator.register(educator, (error, data) => {
            if (error) {
                res.status(500).send({
                    message: error.message || `An error occured while creating the new pictogram`
                });
            } else {
                const accessToken = JWT.generateJWT({id: data.id, email: data.email});
                res.send({auth_token: accessToken});
            }
        });
    } else {
        res.status(400).send({
            message: `Password is missing`
        });
    }
};

exports.getByEmail = (req, res) => {
    if (Object.keys(req.body).length === 0){
        res.status(400).send({
            message: `Can't get a educator based on empty email`
        });
    }
    Educator.getByEmail(req.body.email, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find the educator with email: ${req.body.email}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving educator with email: ${req.body.email}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.login = (req, res) => {
    if (!req.body.password || !req.body.email){
        res.status(400).send({
            message: `Credentials are missing`
        });
    } else {
        Educator.getByEmail(req.body.email, async (error, data) => {
            console.log(error)
            if (error) {
                if(error.kind === "not_found"){
                    res.status(404).send({
                        message: `Couldn't find the educator with email: ${req.body.email}`
                    });
                } else {
                    res.status(500).send({
                        message: `An error occured retrieving educator with email: ${req.body.email}`
                    });
                }
            } else {
                console.log(data);
                if (await bcrypt.compare(req.body.password, data.password)){
                    const accessToken = JWT.generateJWT({id: data.id, email: data.email});
                    res.send({auth_token: accessToken});
                } else {
                    res.status(500).send({
                        message: `Password is not correct: ${req.body.email}`
                    });
                }
            }
        });
    }
};

exports.getCurrent = (req, res) => {
    try {
        const payload = JWT.getPayload(req.headers.authorization);
        res.send({id: payload.id});
    } catch (e) {
        res.status(500).send({message: `Could not find access token: ${e}`})
    }
};

exports.addUser = (req, res) => {
    if (!req.body.idEducator || !req.body.idUser){
        res.status(400).send({
            message: `Values are missing`
        });
    } else {
        const educatorUser = {
            idEducator: req.body.idEducator,
            idUser: req.body.idUser
        }
        Educator.addUser(educatorUser, (error, data) => {
            if (error) {
                res.status(500).send({
                    message: error.message || `An error occured while adding user to educator`
                });
            } else {
                res.send(data);
            }
        });
    }
}

exports.getUsersByEducator = (req, res) => {
    Educator.getUsersByEducator(req.params.id, (error, data) => {
        if (error) {
            if(error.kind === "not_found"){
                res.status(404).send({
                    message: `Couldn't find users of educator with id: ${req.params.id}`
                });
            } else {
                res.status(500).send({
                    message: `An error occured retrieving users of educator with id: ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};
