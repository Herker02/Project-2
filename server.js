//require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var fileUpload = require('express-fileupload');

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(fileUpload());

// express upload
app.post("/upload", function(req, res) {
  res.sendFile(path.join(__dirname, "/index.handlebars"));
  var sampleFile;
  var uploadPath;
  var fileName;
  if (Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  fileName = req.body.fileName;
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/media/" + fileName + ".mp3";
  sampleFile.mv(uploadPath, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
  });
});
// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
