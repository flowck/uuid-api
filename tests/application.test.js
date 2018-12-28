// Dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiUuid = require("chai-uuid");

// Chai setup
chai.use(chaiHttp);
chai.use(chaiUuid);
const should = chai.should();

// Current testing file
const application = require("../src/application");

// Test cases
describe("UUIDs", () => {
  /*
   * Get a single uuid
   */
  describe("/GET single uuid", () => {
    it("It should GET a single uuid", done => {
      chai
        .request(application)
        .get("/api/")
        .end((err, res) => {
          if (err) throw err;
          res.should.have.status(200);
          res.body.uuid.should.be.a.uuid("v4");
          done();
        });
    });
  });
});
