var moment = require('moment');

module.exports.lifespan = function(start, end){
    return moment.duration(end.diff(start)).asYears() ;
};