/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_groups', {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'groups',
        key: 'id'
      }
    }
  }, {
    tableName: 'student_groups'
  });
};
