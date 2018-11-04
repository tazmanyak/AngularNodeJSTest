/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parents', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    personId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'persons',
        key: 'id'
      }
    }
  }, {
    tableName: 'parents'
  });
};
