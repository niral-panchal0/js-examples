var fs = require('fs');

//create an empty file named hello.txt:
fs.appendFile('hello.txt', 'hello my name is niral', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

              
