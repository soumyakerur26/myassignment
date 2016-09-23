var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../server/app");

var url = supertest("http://localhost:8080");


describe("Testing the get route", function(err){
  it("should handle and send the computed info", function(done){
    url
    .get("/movie/get")
    .expect(200)
    .end(function(err,res){
      if (err) {
            throw err;
      }
      //expect(res.text).to.be.equal("Hello!");
      res.json.should.be.equal(docs);
      //assert(res.text == "Hello!","Test has failed");
      done();
        });

  });
});
describe("Testing the post route", function(err){
  it("should handle and send the computed info", function(done){
    url
    .post("/movie/add")
    .expect(200)
    .end(function(err,res){
      if (err) {
            throw err;
      }
      //expect(res.text).to.be.equal("Hello!");
      res.text.should.be.equal("movie added successfully");
      //assert(res.text == "Hello!","Test has failed");
      done();
        });

  });
});

describe("Testing the delete route", function(err){
  it("should handle and send the computed info", function(done){
    url
    .delete("/movie/delete/:imdbID")
    .expect(200)
    .end(function(err,res){
      if (err) {
            throw err;
      }
      //expect(res.text).to.be.equal("Hello!");
      res.text.should.be.equal("movie deleted");
      //assert(res.text == "Hello!","Test has failed");
      done();
        });

  });
});
