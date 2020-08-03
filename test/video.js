//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// let mongoose = require("mongoose");
// let Book = require('../app/models/book');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const expect = require('chai').expect;


url = 'localhost:3000'

chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
  // beforeEach((done) => { //Before each test we empty the database
  //     Book.remove({}, (err) => { 
  //        done();           
  //     });        
  // });
  /*
    * Test the /GET route
    */
  // describe('/GET videos/:videoId', () => {
  //   it('it should GET a video', (done) => {
  //     chai.request(url)
  //       .get('/videos/1')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         //   res.body.should.be.a('array');
  //         //   res.body.length.should.be.eql(0);
  //         done();
  //       });
  //   });
  // });

  describe('Create new user: ', () => {
    it('should create a new user', (done) => {
      chai.request(url)
        .post('/create')
        .send(
          {
            "email": "maildedumi@dumi.com", 
            "password": "dumi", 
            "tipo": "mailPass",
            "image": "https://firebasestorage.googleapis.com/v0/b/chotuve-android-media.appspot.com/o/userPic%2F7e08599a-87c1-408a-92c0-a100f3af7ae8?alt=media&token=f32c710f-271f-4233-8294-9576c0d3c101",
            "phone": "+541536701234", 
            "username": "dumi"
          }
        )
        .end(function (err, res) {
          console.log(res.body)
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('Login: ', () => {
    it('should login one user', (done) => {
      chai.request(url)
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
          console.log(res.body)
          expect(res).to.have.status(200);
          done();
        });
    });
  });


});

