/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organization_teams', {
    organizationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'organizations',
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
    tableName: 'organization_teams'
  });
};
