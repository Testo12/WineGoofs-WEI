var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WineSchema = new Schema({
    name: {type: String, required: true, max: 100},
    type: {type : String, required : true , max: 200},
    ammount: {type: number, required: true},
    taste: {type: String, required: true, max: 100},
    articleNumber: {type: Number, required : true},
    grapes: {type: String, required: true, max: 60},
    price: {type: Number, required: true},
    originLand: {type: String, required: true, max: 80},
    province: {type: String, required: true, max: 100}
});

module.exports = mongoose.model('Wine', WineSchema);