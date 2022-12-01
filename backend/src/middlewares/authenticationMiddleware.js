const express = require("express");
const JWT = require("../utils/authenticationServices.js");

const authMiddleware = function(){

}

authMiddleware.mustBeAuthenticated = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(500).json('No authorization header');
      }
      const accessToken = authorization.replace('AccessToken ', '');
      if (!accessToken) {
        return res.status(500).send('No access token');
      }
      if (!isValidJWT(accessToken)) {
        return res.status(500).send('No access token');
      }
      req.accessToken = accessToken;
      next();
}

module.exports = authMiddleware;