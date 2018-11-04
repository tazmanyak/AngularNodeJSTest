/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datasheet_goals', {
    datasheetId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'datasheets',
        key: 'id'
      }
    },
    goalId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'goals',
        key: 'id'
      }
    }
  }, {
    tableName: 'datasheet_goals'
  });
};
