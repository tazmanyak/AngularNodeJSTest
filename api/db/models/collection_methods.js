/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collection_methods', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    method: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'collection_methods'
  });
};
