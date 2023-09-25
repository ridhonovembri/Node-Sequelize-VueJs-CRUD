module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'ID'
      },
      UserId: {
        type: Sequelize.STRING,
        field: 'USER_ID'
      },
      UserName: {
        type: Sequelize.STRING,
        field: 'USER_NAME'
      },
      Job: {
        type: Sequelize.STRING,
        field: 'JOB'
      },
    },
    {
      timestamps: false,
    }
  );

  return Users;
};
