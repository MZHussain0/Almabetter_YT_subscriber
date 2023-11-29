const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const expect = chai.expect;

// Configure chai //
chai.use(chaiHttp);

// Main describe block for Subscribers API test suite
describe("Subscribers API", () => {
  // Nested describe block for testing GET all subscribers endpoint

  describe("GET /subscribers", () => {
    // Test case to check if all subscribers are retrieved successfully

    it("should GET all subscribers", (done) => {
      chai
        .request(server)
        .get("/subscribers")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });

  // Nested describe block for testing GET subscribers names endpoint
  describe("GET /subscribers/names", () => {
    // Test case to check if subscriber names and channels are retrieved successfully
    it("should GET all subscribers names and subscribed channels", (done) => {
      chai
        .request(server)
        .get("/subscribers/names")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array"); // Check if the first object in the response array has 'name' and 'subscribedChannel' properties
          if (res.body.length > 0) {
            expect(res.body[0]).to.have.property("name");
            expect(res.body[0]).to.have.property("subscribedChannel");
          }
          done();
        });
    });
  });

  // Nested describe block for testing GET a single subscriber by ID endpoint
  describe("GET /subscribers/:id", () => {
    let testSubscriberId;

    // Test case to check if a subscriber is retrieved using their ID
    it("should GET a subscriber by ID", (done) => {
      chai
        .request(server)
        .get(`/subscribers/${testSubscriberId}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id", testSubscriberId);
          done();
        });
    });

    // Test case to check the response when no ID is provided in the request
    it("should return 400 if no ID is provided", (done) => {
      chai
        .request(server)
        .get("/subscribers/")
        .end((err, res) => {
          expect(res).to.have.status(400);
          done();
        });
    });

    // Test case to check the response when a non-existing ID is used
    it("should return 404 if subscriber not found", (done) => {
      const nonExistingId = "507f1f77bcf86cd799439011"; // Use a non-existing ObjectId
      chai
        .request(server)
        .get(`/subscribers/${nonExistingId}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
