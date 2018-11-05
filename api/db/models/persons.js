/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persons', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    middleName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    image: {
      type: "BLOB",
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'persons'
  });
};
