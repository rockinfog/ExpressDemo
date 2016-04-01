const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    const files = fs.readdirSync('public/images');
    res.render('index', { title: 'Express', imgs: files });
});

module.exports = router;
