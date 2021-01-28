const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    X1:[],
    X2: []
});

module.exports = { Employee };