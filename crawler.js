var iron_mq = require('iron_mq'),
  Crawler = require("node-webcrawler"),
  options = require('./iron_options'),
  validUrl = require('valid-url');

var q = new iron_mq.Client(options);

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, result, $) {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    $('a').each(function (index, a) {
      var toQueueUrl = $(a).attr('href');
      if (validUrl.is_web_uri(toQueueUrl)) {
        c.queue(toQueueUrl);
        q.post(toQueueUrl, function (e, t) {
          if (e)
            console.log(e);
        });
      }
    });
  }
});

c.queue('http://www.bbc.com/news/world_radio_and_tv/');

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