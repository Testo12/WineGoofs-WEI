var Cart = require('../models/cart.model');

exports.create = function(req,res){
    var cart = new Cart({
        wineArticleNumber: req.body.wineArticleNumber,
    });

    
    cart.save(function(error){
        if (error){
            return next(error);
        }
        res.send('Request created');
    });



};

exports.delete = function(req,res){
    Product.findByIdAndDelete(req.params.id, {$set: req.body}, function(err, product){
      if (err) return next (err);
      res.send('Request removed');
    });
};

exports.number = function(req,res){
    Cart.findById(req.params.id, function(err, wineArticleNumber){
        if (err) return next(err);
        res.send(wineArticleNumber);
    });
};