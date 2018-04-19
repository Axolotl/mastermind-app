'use strict';
module.exports = (sequelize, DataTypes) => {
  var Score = sequelize.define('Score', {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {});
  Score.associate = function(models) {
    // associations can be defined here
  };
  return Score;
};