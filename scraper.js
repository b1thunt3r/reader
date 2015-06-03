var read = require('node-readability');

read('http://techcrunch.com/2015/06/02/shapekit/', function(err, article, meta) {
  // Main Article
  console.log(article.content);
  // Title
  console.log(article.title);

  // HTML Source Code
  //console.log(article.html);
  // DOM
  //console.log(article.document);

  // Response Object from Request Lib
  //console.log(meta);

  // Close article to clean up jsdom and prevent leaks
  article.close();
});

//var iron_mq = require('iron_mq'),
//  options = require('./iron_options');

//var q = new iron_mq.Client(options);
//
//q.get({}, function(error, body) {
//  //console.log(error);
//  console.log(body);
//  if(error == null) {
//    // Delete a message
//    //imq.del(body["id"], function(error, body) {
//    //  console.log(error);
//    //  console.log(body);
//    //});
//  }
//});