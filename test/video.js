process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');

const expect = require('chai').expect;
const URL = require('../server');

chai.use(chaiHttp);

describe('Videos', () => {

  describe('Not get feed: ', () => {
    it('should not get feed anonymous user', (done) => {
      chai.request(URL)
        .get('/feed')
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('Get video by id: ', () => {
    it('should return video', (done) => {
      chai.request(URL)
        .get('/videos/17')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Get user video list: ', () => {
    it('should retourn the user video list', (done) => {
      chai.request(URL)
        .get('/videos/user/IWxsnDXhjlMORPtOjvMKyhaQTD63')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });



});

