var f = require('fs');
var fileToReadFrom = './readMe.data';
var fileToWriteTo = './writeToMe.data';
var r = f.createReadStream(fileToReadFrom);
var w = f.createWriteStream(fileToWriteTo);
r.on('data',function(d){
  w.write(d);
});
r.on('error',function(e){
  console.log(e);
});
w.on('error',function(e){
  console.log(e);
});
