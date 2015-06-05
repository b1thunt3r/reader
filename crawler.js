var Crawler = require("node-webcrawler"),
  validUrl = require('valid-url'),
  url = require('url');

var urlToUse = url.parse('http://wp.jain.se/ishan/');

//noinspection JSUnusedGlobalSymbols
var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function (error, result, $) {
    // $ is Cheerio by default
    //a lean implementation of core jQuery designed specifically for the server
    $('a').each(function (index, a) {
      // TODO: Distinct the urls, with least amount of mem
      // TODO: Maybe replace queue with db, for dictintion
      // TODO: come up some clever way to minimize the urls (constrains: domain/hostname?, filter (remove like tags))
      var toQueueUrl = $(a).attr('href');
      if (validUrl.is_web_uri(toQueueUrl)) {
        console.log(toQueueUrl);
        c.queue(toQueueUrl);
      }
    });
  }
});

// entry url
c.queue(url.format(urlToUse));