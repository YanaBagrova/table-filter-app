// 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
    foundationDate: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    peopleAmmount: DataTypes.INTEGER,
    square: DataTypes.INTEGER,
    sunnyDays: DataTypes.INTEGER,
    distanceFromMoscow: DataTypes.INTEGER,
    distanceFromEquator: DataTypes.INTEGER,
    distanceFromNorthToSouth: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
