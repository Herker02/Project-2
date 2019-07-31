var express = require("express");
var fileUpload = require("express-fileupload");
var app = express();
var path = require("path");

var PORT = 3000;
app.use("/form", express.static(__dirname + "/index.html"));

// default options
app.use(fileUpload());
//app.use('/upload', express.static(__dirname + '/upload.html'));

app.post("/upload", function(req, res) {
  res.sendFile(path.join(__dirname, "/upload.html"));
  var sampleFile;
  var uploadPath;

  if (Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }

  console.log("req.files >>>", req.files);
  sampleFile = req.files.sampleFile;

  uploadPath = __dirname + "/public/uploads/" + sampleFile.name;

  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    console.log("return to main page");
    //res.send("File uploaded to " + uploadPath);
  });
});

app.listen(PORT, function() {
  console.log("Express server listening on port ", PORT);
});
