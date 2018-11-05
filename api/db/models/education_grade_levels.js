/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education_grade_levels', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    level: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'education_grade_levels'
  });
};
