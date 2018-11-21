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

exports.create = function(req,res){
    var wine = new Wine({
        name: req.body.name,
        stars: req.body.stars,
        country: req.body.country,
        color: req.body.color,
        grapes: [
            req.body.grapes
        ],
        yearMade: req.body.yearMade,
        region: req.body.region,
        price: req.body.price,
        articleNumber: req.body.articleNumber
    });

    
    wine.save(function(error){
        //obs hantera error
        if (error){
            return next(error);
        }
        res.send('Product created');
    });
}
