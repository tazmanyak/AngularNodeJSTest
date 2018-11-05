/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('districts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    stateId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'states',
        key: 'id'
      }
    }
  }, {
    timestamps: false, tableName: 'districts'
  });
};
