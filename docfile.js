const fs = require('fs');
//fs.readFile(file, [encoding], [callback]);
const file = "VISION.docx";
fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});