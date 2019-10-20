const fs = require('fs');
const request = require('request');
const download = function(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

for(var i = 1; i <= 50; i++) {
  var catImage = 'https://aiml-course.github.io/CATandDOG/cat/cat.' + i + '.jpg';
  download(catImage, './cat/cat.' + i + '.jpg', function(){
    console.log(catImage);
  });
  var dogImage = 'https://aiml-course.github.io/CATandDOG/dog/dog.' + i + '.jpg';
  download(dogImage, './dog/dog.' + i + '.jpg', function(){
    console.log(dogImage);
  });
}
