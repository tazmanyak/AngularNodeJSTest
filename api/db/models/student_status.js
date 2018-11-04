/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'student_status'
  });
};
