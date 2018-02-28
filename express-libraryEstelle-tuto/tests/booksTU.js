process.env.NODE_ENV = 'test' ;
var chai = require('chai');
var expect = require('chai').expect;
var should = require('chai').should;
var chaiHttp = require('chai-http');
var server = require('../app');
var books = require ('../models/book');

chai.use(chaiHttp);

describe('Books', () => {
    describe('getAllBooks', () =>{
        beforeEach(function(done){ 
           books.remove({ size: 'large' }, function (err) {
                //if (err) return handleError(err);
                // removed!
                console.log("remove book documentation");
                done();
          });   
        });


        it('test remove test books db', (done) =>{
            chai.request(server)
                .get('/api/books')
                .end(function(err, res) {
                    expect(res).to.be.a('object');
                    done();
                });
        });      
     
    });
});


