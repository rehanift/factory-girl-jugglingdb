var should = require("chai").should();

var factory = require("factory-girl");
var JugglingDbAdapter = require("../").JugglingDbAdapter;
factory.setAdapter(JugglingDbAdapter);

var User = require("./resources/User").User;

describe("JugglingDB Factory Girl Adapter", function(){
  beforeEach(function(){
    factory.define("user", User, {
      name:"Rudy"
    });
  });
  it("builds a new model", function(done){

    factory.build("user", function(err, user){
      user.should.be.an.instanceof(User);
      user.name.should.equal("Rudy");

      User.all(function(err, users){
        users.length.should.equal(0);
        done();
      });
    });

  });
  it("creates a new model", function(done){
    factory.create("user", function(err, user){
      user.should.be.an.instanceof(User);
      user.name.should.equal("Rudy");

      User.all(function(err, users){
        users.length.should.equal(1);
        done();
      });

    });
  });
  it("cleans up built models", function(done){
    factory.create("user", function(err, user){

      factory.cleanup(function(err){
        User.all(function(err, users){
          users.length.should.equal(0);
          done();
        });        
      });

    });
  });
});