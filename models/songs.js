module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Song.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Song.belongsTo(models.example, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Song;
};
