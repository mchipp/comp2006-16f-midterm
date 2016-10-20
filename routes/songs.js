// Created by Mark Chipp 200180985 <mark.chipp@live.ca, mark.chipp@mygeorgian.ca>
// Created on 20-Oct-2016

var express = require('express');
var router = express.Router();

// now reference the Song model
var Song = require('../models/song');

// GET handler for /songs
router.get('/', function(req, res, next) {
    //run a query with the Song model
    Song.find(function(err,songs) {
        if(err){
            console.log(err);
            res.render('error');
        }
        else{
            // no error? load the songs view!
            res.render('songs', {
                title: 'Songs',
                songs: songs
            });
        }
    });
});

// this makes the controller public
module.exports = router;