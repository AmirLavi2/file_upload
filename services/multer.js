const multer = require('multer');

// multer conf
const storageCfg = multer.diskStorage({
    destination: (req, file, cb)=>{cb(null, './upload/')}, // file will be here
    filename: (req, file, cb) =>{cb(null, file.originalname)} // save file the with the original name
});
const maxSize = { fileSize: 1024 * 1024 * 5}; // max upload of 5 MB

// upload middleware
const upload = multer({storage: storageCfg, limits: maxSize});

module.exports = {mid: upload.single('keyName')};
