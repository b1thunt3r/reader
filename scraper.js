var iron_mq = require('iron_mq'),
  options = require('./iron_options');

var q = new iron_mq.Client(options);

q.get({}, function(error, body) {
  //console.log(error);
  console.log(body);
  if(error == null) {
    // Delete a message
    //imq.del(body["id"], function(error, body) {
    //  console.log(error);
    //  console.log(body);
    //});
  }
});