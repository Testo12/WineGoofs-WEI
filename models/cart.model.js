var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({
    wineArticleNumber: {type: Number, required : true},
});

module.exports = mongoose.model('Cart', CartSchema);