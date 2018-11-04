/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    organizationId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    studentStatusId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'student_status',
        key: 'id'
      }
    },
    personId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'persons',
        key: 'id'
      }
    }
  }, {
    tableName: 'students'
  });
};
