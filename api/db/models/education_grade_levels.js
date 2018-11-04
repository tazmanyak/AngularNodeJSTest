/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_grade_levels', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    level: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'education_grade_levels'
  });
};
