/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_groups', {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    groupId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true,
      references: {
        model: 'groups',
        key: 'id'
      }
    }
  }, {
    timestamps: false, tableName: 'student_groups'
  });
};
