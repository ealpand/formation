var expect = require('chai').expect;
var moment = require('moment');
var dateUtils = require ('../utils/dateUtils');

describe('Utils', () => {
    describe('Lifespan', () =>{
       /* it('AssertionError: expected 43 to equal 42.', () =>{
            var answer = 43;

            // AssertionError: expected 43 to equal 42.
            expect(answer).to.equal(42);
            
        });
        it('it should return the difference in years between 2 dates.', () =>{
            var startDate = moment().set('year', 1992);
            var endDate = moment().set('year', 1992);
            answer = dateUtils.lifespan(startDate, endDate);
            // AssertionError: expected 43 to equal 42.
            expect(answer).to.equal(26);
            
        });*/
        it('it should return the difference in years between 2 dates.', () =>{
            
            var startDate = moment().set('year', 1992);
            var endDate = moment().set('year', 2018);
            answer = dateUtils.lifespan(startDate, undefined);
            expect(answer).to.equal(26);
            
        });
    });
});


