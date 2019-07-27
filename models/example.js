module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
<<<<<<< HEAD
    description: DataTypes.TEXT,
    songs: DataTypes.TEXT
=======
    description: DataTypes.TEXT
>>>>>>> origin
  });
  return Example;
};
