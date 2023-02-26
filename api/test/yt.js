const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require("../server")

// Assertion Style //
chai.should() 
chai.use(chaiHttp)

describe("YT Subscriber API", ()=> {
   /**
    * Test the GET Route /subscribers
    */
   describe("GET /subscribers", ()=> {
    it("It should get all the subscribers", (done)=> {
      chai.request(server)
      .get("/subscribers")
      .end((err, response)=>{
        response.should.have.status(200)
        response.body.should.be.a('array')
        done()
      })
    })

    it("It should not get all the subscribers", (done) => {
       chai
          .request(server)
          .get("/subscriber")
          .end((err, response) => {
             response.should.have.status(404);
             done();
          });
    });
   })

   /**
    * Test the GET (by id) Route /subscribers/:id
    */
   describe("GET /subscribers/:id", ()=> {
    it("It should GET a subscriber details by id", (done)=> {
      const subscriberID = "63f78075ad07a7f651fdd9b8";
      chai.request(server)
      .get("/subscribers/" + subscriberID)
      .end((err, response)=>{
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('name')
        response.body.should.have.property("subscribedChannel");
        done()
      })
    })
  })

   /**
    * Test the GET Route /subscribers/names
    */
   describe("GET /subscribers/names", ()=> {
    it("It should get all names and subscribedChannels of subscribers", (done)=> {
      chai.request(server)
      .get("/subscribers")
      .end((err, response)=>{
        response.should.have.status(200)
        response.body.should.be.a('array')
        done()
      })
    })
  })
})