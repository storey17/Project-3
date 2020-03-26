'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', {
    episodeTitle: DataTypes.STRING,
    podcastTitle: DataTypes.STRING,
    genre: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  Podcast.associate = function(models) {
    // associations can be defined here
  };
  return Podcast;
};