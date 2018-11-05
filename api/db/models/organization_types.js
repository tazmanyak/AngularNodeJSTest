/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization_types', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'organization_types'
  });
};
