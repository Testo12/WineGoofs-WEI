var path = require('path');

exports.home = function(req,res){
    res.sendFile(path.resolve('www/index.html'));
}