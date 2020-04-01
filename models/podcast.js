'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', {
    episodeTitle: DataTypes.STRING,
    podcastTitle: DataTypes.STRING,
    genre: DataTypes.STRING,
  }, {});
  Podcast.associate = function (models) {
    // podcasts belong to a user
    models.Podcast.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    console.log(models);
  };
  return Podcast;
};