var iron_mq = require('iron_mq'),
  Crawler = require("node-webcrawler"),
  url = require('url');
  options = require('./iron_options');

var imq = new iron_mq.Client(options);

var queue = imq.queue("test_queue");


//var c = new Crawler({
//  maxConnections : 10,
//  // This will be called for each crawled page
//  callback : function (error, result, $) {
//    // $ is Cheerio by default
//    //a lean implementation of core jQuery designed specifically for the server
//    $('a').each(function(index, a) {
//      var toQueueUrl = $(a).attr('href');
//      c.queue(toQueueUrl);
//    });
//  }
//});

//c.queue('http://www.bbc.com/news/world_radio_and_tv/');

//imq.post("Test message 2", function(error, body) {
//  console.log(body);
//  //console.log(error);
//});
//
//imq.get({}, function(error, body) {
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