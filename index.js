var Factory = require("factory-girl"),
    Adapter = Factory.Adapter;

var JugglingDbAdapter = function(){};
JugglingDbAdapter.prototype.create = function(Model, props){
  return new Model(props);
};

JugglingDbAdapter.prototype.build = function(Model, props){
  return new Model(props);
};

JugglingDbAdapter.prototype.save = function(doc, Model, cb){
  doc.save(function(err){
    if (err) {
      var error = new Error("Failed to save fixture");
      error.event = err;
      cb(error);
    } else {
      cb();
    }
  });
};


JugglingDbAdapter.prototype.destroy = function(doc, Model, cb){
  doc.destroy(function(err){
    if (err) {
      var error = new Error("Failed to destory fixture");
      error.event = err;
      cb(error);
    } else {
      cb();
    }
  });
};


exports.JugglingDbAdapter = new JugglingDbAdapter();
