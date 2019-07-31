module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    songs: DataTypes.TEXT
  });
  Example.associate = function(models) {
    Example.hasMany(models.Song, {
      onDelete: "cascade"
    });
  };

  return Example;
};


