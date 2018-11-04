/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_teams', {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    teamId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'teams',
        key: 'id'
      }
    }
  }, {
    tableName: 'student_teams'
  });
};
