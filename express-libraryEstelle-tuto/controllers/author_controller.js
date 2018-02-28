exports.getAll = function(req, res, next){
    res.send("Liste");
} 
exports.getById = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 
exports.create = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 
exports.update = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 
exports.delete = function(req, res, next){
    res.send(`Livre id : ${req.params.id}` );
} 