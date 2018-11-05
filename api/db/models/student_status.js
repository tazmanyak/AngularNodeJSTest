/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    status: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    timestamps: false, tableName: 'student_status'
  });
};
