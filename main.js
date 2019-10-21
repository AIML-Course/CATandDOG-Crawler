const fs = require('fs');
const path = require('path');
const request = require('request');

var count = 0;

function download(uri, filename, cb) {
  function callback() {
    count += 1;
    console.log(uri);
    return cb(uri);
  }
  request.head(uri, function(err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

function downloadAll(res) {
  for(var i = 1; i <= 50; i++) {
    var catImage = 'https://aiml-course.github.io/CATandDOG/cat/cat.' + i + '.jpg';
    download(catImage, './cat/cat.' + i + '.jpg', function(filename){});
    var dogImage = 'https://aiml-course.github.io/CATandDOG/dog/dog.' + i + '.jpg';
    download(dogImage, './dog/dog.' + i + '.jpg', function(filename){});
  }
  res.send();
}

var express = require('express');
var app = express();
app.get('/download', function(req, res) {
  downloadAll(res);
});
app.get('/count', function(req, res) {
  res.send("" + count);
});
app.use(express.static(__dirname));

app.listen(8888);
