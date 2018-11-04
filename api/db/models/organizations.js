/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organizations', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    districtId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'districts',
        key: 'id'
      }
    },
    organizationTypeId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'organization_types',
        key: 'id'
      }
    },
    educationGradeLevelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'education_grade_levels',
        key: 'id'
      }
    }
  }, {
    tableName: 'organizations'
  });
};
