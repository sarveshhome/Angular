const express = require('express');
const router = express.Router();

//City Model
let City = require('../models/city');

router.get('/', function(req, res) {
    res.json({ message: 'Welcome to api' });
});

router.route('/city')
    .get(function(req, res) {
        City.find(function(err, city) {
            if (err)
                res.send(err);

            res.json(city);
        });
    })
    .post(function(req, res) {
        var city = new City(); //create new instance of the city model
        city.name = req.body.name;

        //save and check erorrs
        city.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json({ message: 'save data' });
        });
    });


module.exports = router;