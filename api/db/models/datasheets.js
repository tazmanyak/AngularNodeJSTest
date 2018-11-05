/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('datasheets', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true, autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
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
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sessionId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'sessions',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    timestamps: false, tableName: 'datasheets'
  });
};
