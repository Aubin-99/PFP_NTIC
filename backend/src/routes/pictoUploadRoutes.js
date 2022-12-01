module.exports = app => {
    const pictoController = require("../controllers/pictogramController.js");
    const express = require("express");

    const router = express.Router();
    const path = require('path');
    const storingPath = './src/images/picto';

    const multer = require('multer');
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, storingPath);
        },
        filename: function(req, file, cb){
            const ext = file.mimetype.split("/")[1];
            //cb(null, `${file.originalname}-${Date.now()}.${ext}`);
            var newName = path.parse(file.originalname).name;

            // remove all accents
            newName = newName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            // replace spaces by underscores
            newName = newName.replace(/ /g,"_");

            cb(null, `${newName}-${Date.now()}.${ext}`);
        }
    });
    
    const upload = multer({
        storage: storage
    });

    router.post("/", upload.array('images'), pictoController.upload); // 'images' = input name in the form
    //router.post("/single", upload.single('image'), pictoController.uploadSingle); // 'images' = input name in the form

    router.post('/single', upload.single('image'), pictoController.uploadSingle);
    
    app.use('/upload', router);
}   