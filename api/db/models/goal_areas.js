/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goal_areas', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    area: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'goal_areas'
  });
};
