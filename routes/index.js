var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/hello', function (req, res, next) {

    var name = req.param('name');

    if (!name) {
        name = 'default';
    }

    res.send("You are in hello route! Welcome: " + name)
});

router.post('/api', function (req, res, next) {

    var token = req.param('token');
    var name = req.param('name');

    if(!token){
      res.status(401);
      res.send("Not authorized!");
    }

    if (!name) {
        name = 'default';
    }


    var output = '';
    //some awesome logic

    // {
    //
    //  magic
    //
    // }

    var d = {
        dogs: 20,
        cats: 50,
        parrot: 2
    };

    res.send(d);

    // res.send(output);
});

module.exports = router;
