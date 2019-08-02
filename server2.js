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
  var fileName;
  if (Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  fileName = req.body.fileName;
  //!!!!!need to update
  var con = mysql.createConnection({
    host: "localhost",
    user: "myusername",
    password: "mypassword",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //!!!!!Insert a record in the "music" table:
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/media/" + fileName + ".mp3";
  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
});

app.listen(PORT, function() {
  console.log("Express server listening on port ", PORT);
});
