var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: {type: String, required: true, max: 100},
    stars: {type : Number, required : true},
    country: {type: String, required: true, max: 80},
    color: {type: String, required: true, max: 20},
    grapes: [String],
    yearMade: {type: Number, required: true},
    region: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    articleNumber: {type: Number, required : true},  
});

module.exports = mongoose.model('Wine', WineSchema);