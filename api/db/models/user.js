'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    birthDate: DataTypes.DATEONLY,
    gender: DataTypes.CHAR,
    nationality: DataTypes.STRING,
    image: DataTypes.BLOB,
    email: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};