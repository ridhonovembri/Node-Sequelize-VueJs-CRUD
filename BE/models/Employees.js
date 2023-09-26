module.exports = (sequelize, Sequelize) => {
    const Employees = sequelize.define(
      "employees",
      {
        Id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          field: 'ID'
        },
        EmployeeName: {
          type: Sequelize.STRING,
          field: 'EMPL_NAME'
        },
        Address: {
          type: Sequelize.STRING,
          field: 'ADDRESS'
        },
      },
      {
        timestamps: false,
      }
    );
  
    return Employees;
  };
  