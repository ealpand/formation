var moment = require('moment');

module.exports.lifespan = function(start = new Date(), end = new Date()){
    startDate = moment(start);
    endDate = moment(end);
    return Math.floor(moment.duration(endDate-startDate).asYears()) ;
};