// const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Roles = sequelize.define(
    "roles",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'ID'
      },
      RoleName: {
        type: Sequelize.STRING,
        field: 'ROLE_NAME'
      },
      RoleDesc: {
        type: Sequelize.STRING,
        field: 'ROLE_DESC',
      }
    },
    {
      timestamps: false,
    }
  );

  return Roles;
};
