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




});