var db = require("../models");

module.exports = function(app) {
  // Find all playlist and return them to the user with res.json
  app.get("/api/author", function(req, res) {
    db.Author.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/author/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Author.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.post("/api/author", function(req, res) {
    // Create an Author with the data available to us in req.body
    console.log(req.body);
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/author/:id", function(req, res) {
    // Delete the Author with the id available to us in req.params.id
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
