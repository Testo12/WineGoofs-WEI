var Wine = require('../models/wine.model');
exports.list = function(req,res){
    Wine.find(function(err, wine){
        if (err) return next(err);
        res.send(wine);
    });
};

exports.details = function(req,res){
    Wine.findById(req.params.id, function(err, wine){
        if (err) return next(err);
        res.send(wine);
    });
};

