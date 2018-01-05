var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
    res.render('about', {
        title: 'God',
        name : 'Senz',
        content : 'This is awesome'
    });
});

module.exports = router;