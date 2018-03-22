const express = require('express');
const router = express.Router();
const multerService = require('./services/multer'); // will handler the upload

// routing
router.route('/upload').post(multerService.mid, (req, res) => { // POST: /api/upload
    console.log(req.file.filename + ' uploaded OK'); // server message
    res.status(201).send(req.file.filename + ' uploaded OK'); // client message
});

module.exports = router;