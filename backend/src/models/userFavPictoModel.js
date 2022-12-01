const database = require("../database/database.js");

const UserFavPicto = function(favPicto) {
    this.idUser = favPicto.idUser;
    this.idPictogram = favPicto.idPictogram;
}

UserFavPicto.add = (userFavPicto, result) => {
    database.query(`INSERT INTO User_FavPicto SET ?`, userFavPicto, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });
};

UserFavPicto.delete = (idUser, idPicto, result) => {
    const query = "DELETE FROM User_FavPicto WHERE idPictogram = " + idPicto + " AND idUser = " + idUser + ";";
    database.query(query, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        if (res.affectedRows == 0) {
            // id not found
            result({ kind: "not_found" }, null);
            return;
        }
        result(null, res);
    });
};

module.exports = UserFavPicto;