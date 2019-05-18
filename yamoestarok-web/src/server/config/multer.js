const multer  = require('multer');
//Uploads
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const imageName = file.originalname.split('.')[0]
        const imageExtesion = file.originalname.split('.')[1]

        cb(null, `${imageName}-${Date.now()}.${imageExtesion}`);
    },
 });


module.exports = storage