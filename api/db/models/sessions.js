/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sessions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    modifiedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    closedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    tableName: 'sessions'
  });
};
