/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goals', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    goalAreaId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'goal_areas',
        key: 'id'
      }
    },
    collectionMethodId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'collection_methods',
        key: 'id'
      }
    },
    organizationId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'organizations',
        key: 'id'
      }
    }
  }, {
    timestamps: false, tableName: 'goals'
  });
};
