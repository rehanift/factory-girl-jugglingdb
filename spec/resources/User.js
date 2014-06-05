var Schema = require("jugglingdb").Schema;
var schema = new Schema("memory");

var User = schema.define("User", {
  name: { type: String, length: 255 }
}); 

exports.User = User;