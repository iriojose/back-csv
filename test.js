let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:8000';


describe('get csv ',()=>{
    it('should get all csv', (done) => {
        chai.request(url).get('/api/files/data').end(function(err,res){
            expect(res).to.have.status(200);
            //expect(res).to.be.an('array');
            done();
        });
    });

    it('should get csv with filename', (done) => {
        chai.request(url).get('/api/files/data/?filename=test3').end(function(err,res){
            expect(res).to.have.status(200);
            //expect(res).to.be.an('array');
            done();
        });
    });
});
   
   