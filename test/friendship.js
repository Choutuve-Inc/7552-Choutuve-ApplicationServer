process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');

const expect = require('chai').expect;
const URL = require('../server');

chai.use(chaiHttp);

describe('Friendship', () => {

  describe('Get friendship requests: ', () => {
    it('should not return the friendship requests list (user not exists)', (done) => {
      chai.request(URL)
        .get('/request')
        .send(
          {
            "user": "mockeduser"
          }
        )
        .end(function (err, res) {
          expect(res).to.have.status(400);
          done();
        });
    });
  });

  describe('Get friends: ', () => {
    it('should return the friends from one user', (done) => {
      chai.request(URL)
        .get('/friendlist')
        .send(
          {
            "user": "mockeduser"
          }
        )
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });


});

