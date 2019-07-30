// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the playlist(dbTodo)
  app.get("/api/author", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/author/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new playlist
  app.post("/api/author", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      playlist_name: req.body.playlist_name,
      type_of_playlist: req.body.type_of_playlist,
    })
    .then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new song
  app.post("/api/post", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Todo.create({
      song_title: req.body.song_title,
      artist: req.body.artist,
      genre: req.body.genre
    })
    .then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });
};
