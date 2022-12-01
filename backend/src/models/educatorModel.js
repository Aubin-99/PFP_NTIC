const database = require("../database/database.js");

const Educator = function(educator) {
    this.name = educator.name;
    this.firstName = educator.firstName;
    this.email = educator.email;
    this.password = educator.password;
}

// SELECT SQL Queries

Educator.getByEmail = (email, result) => {
    database.query(`SELECT * FROM Educator WHERE email = ?`, email, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.length) {
            console.log("found educator: ", res[0]);
            result(null, res[0]);
            return;
        }
        //Could not find Educator with the email
        result({ kind: "not_found" }, null);
    });
};

Educator.getUsersByEducator = (id, result) => {
    var query = `SELECT * FROM User WHERE id IN (SELECT idUser FROM Educator_User WHERE idEducator = ?)`
    database.query(query, id, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });

};

// INSERT SQL Queries

Educator.register = (newEducator, result) => {
    database.query(`INSERT INTO Educator SET ?`, newEducator, (error, res) => {
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        console.log("created educator: ", { id: res.insertId, ...newEducator });
        result(null, { id: res.insertId, ...newEducator });
    });
};

Educator.addUser = (educatorUser, result) => {
    database.query(`INSERT INTO Educator_User SET ?`, educatorUser, (error, res) => {
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, { id: res.insertId });
    });
};


module.exports = Educator;