const database = require("../database/database.js");

const Category = function(category) {
    this.Name = category.Name;
}

Category.getAll = (result) => {
    database.query(`SELECT * FROM Category`, (error, res) =>{
        if (error){
            console.log("error: ", error);
            result(error, null);
            return;
        }
        result(null, res);
    });
};

module.exports = Category;