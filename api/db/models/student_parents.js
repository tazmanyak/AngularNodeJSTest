/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_parents', {
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'students',
        key: 'id'
      }
    },
    parentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'parents',
        key: 'id'
      }
    }
  }, {
    tableName: 'student_parents'
  });
};
