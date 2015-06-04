var read = require('node-readability');

read('http://techcrunch.com/2015/06/02/shapekit/', function(err, article) {
  console.log(article.content);
  console.log(article.title);
  article.close();
});
