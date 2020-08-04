process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');

const expect = require('chai').expect;
const URL = 'localhost:3000'

chai.use(chaiHttp);

describe('Users', () => {

  describe('Login: ', () => {
    it('should login one user', (done) => {
      chai.request(URL)
        .post('/login')
        .send(
          {
            "email": "maildedumi@dumi.com",
            "password": "dumi",
            "tipo": "mailPass",
            "device": "cqq9RCxlQE6ZMYfpxfKIt7:APA91bGc4usxBrRC_t4Ad5j5rT_iGruMQUc7_cClgr-TY2ClS6m978Lfkvrkqq-HyMS_h8XFEn6xeG4atfdjUai4_gV5p-YAKyo4V1aTLDbKE_AHO0PqsbSdgXD7GhQXuHP3tRmj7ZpG"
          }
        )
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Logout: ', () => {
    it('should logout one user', (done) => {
      chai.request(URL)
        .post('/logout')
        .send(
          {
            "device": "cqq9RCxlQE6ZMYfpxfKIt7:APA91bGc4usxBrRC_t4Ad5j5rT_iGruMQUc7_cClgr-TY2ClS6m978Lfkvrkqq-HyMS_h8XFEn6xeG4atfdjUai4_gV5p-YAKyo4V1aTLDbKE_AHO0PqsbSdgXD7GhQXuHP3tRmj7ZpG"
          }
        )
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Get users lists: ', () => {
    it('should retourn the user list', (done) => {
      chai.request(URL)
        .get('/users')
        .end(function (err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });



});

