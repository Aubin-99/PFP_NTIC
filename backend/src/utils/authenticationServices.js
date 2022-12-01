const jwt = require("jsonwebtoken");

const JWT = function(jwt) {
    
}

JWT.generateJWT = (data) => {
    return jwt.sign(data, 'secret');
}

JWT.isValidJWT = (token) => {
    try{
        jwt.verify(token, 'secret');
        return true;
    } catch(err){
        return false;
    }
}

JWT.getPayload = (token) => {
    return jwt.verify(token, 'secret');
}

module.exports = JWT;