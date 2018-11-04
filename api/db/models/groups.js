/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
     name: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'groups'
  });
};
