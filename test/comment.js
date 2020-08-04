process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');

const expect = require('chai').expect;
const URL = 'localhost:3000'

chai.use(chaiHttp);

describe('Comments', () => {

  describe('Comment video without rights: ', () => {
    it('should not create a new comment', (done) => {
      chai.request(URL)
        .post('/videos/1/comments ')
        .send(
          {
            "user": "dumiuser",
            "token": "dumitoken",
            "text": "dumitext",
          }
        )
        .end(function (err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

  describe('Get comments: ', () => {
    it('should get comments from one video', (done) => {
      chai.request(URL)
        .get('/videos/17/comments')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Get likes: ', () => {
    it('should get likes from one video', (done) => {
      chai.request(URL)
        .get('/videos/17/likes')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

});

