// Created by Mark Chipp 200180985 <mark.chipp@live.ca, mark.chipp@mygeorgian.ca>
// Created on 20-Oct-2016

// this defines a Song class using mongoose
var mongoose  = require('mongoose');

var songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'No title entered'
    },
    artist: {
        type: String,
        required: 'No artist entered'
    },
    year: {
        type: Number,
        required: 'No year entered'
    }
});

// ake the Song class public
module.exports = mongoose.model('Song', songSchema);