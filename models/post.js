module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      song_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      artist: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1]
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Post;
  };