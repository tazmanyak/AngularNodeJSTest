/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collection_methods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    method: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'collection_methods'
  });
};
