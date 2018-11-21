var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var wine = require('./routes/wine.router');
var cart = require('./routes/cart.router');
var home = require('./routes/home.router');
var PORT = process.env.PORT || 4242;
var app = express();

var db_url = 'mongodb://User1:passw0rd@ds113454.mlab.com:13454/winegoofs';
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/wine', wine);
app.use('/cart', cart);
app.use('/', express.static(__dirname + '/www'));
app.use('/', home);

app.listen(PORT, function(){
    console.log('Server up and running');
});
