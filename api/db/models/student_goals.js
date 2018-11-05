/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_goals', {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    goalId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true,
      references: {
        model: 'goals',
        key: 'id'
      }
    }
  }, {
    timestamps: false, tableName: 'student_goals'
  });
};
