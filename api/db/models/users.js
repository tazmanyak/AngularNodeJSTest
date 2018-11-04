/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    passwordHash: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    organizationId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'organizations',
        key: 'id'
      }
    },
    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'roles',
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
    tableName: 'users'
  });
};
