var expect  = require('chai').expect;
var request = require('request');
const fs = require('fs');

describe('Status and content', function() {
    const expected = JSON.parse(fs.readFileSync(`${__dirname}/mockjson/carers.json`));
it('carer main page status', function(done) {
    request('http://localhost:4000/carers' , function(error, response, body) {
       // expect(status).to.equal(200);
        expect(response.statusCode).to.equal(200);
        done();
    });
});


it('carer main page retun array', function(done) {
    request('http://localhost:4000/carers' , function(error, response, body) {
       // expect(status).to.equal(200);
       expect(response.body).to.have.lengthOf.above(0);

            
        done();
    });
});


it('retunrn  specific record', function(done) {
    request('http://localhost:4000/carers/5e43e974e75e85074cd30b53' , function(error, response, body) {
       // expect(status).to.equal(200);
        expect(response.statusCode).to.equal(200);
        done();
    });
});



});


