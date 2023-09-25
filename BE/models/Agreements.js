module.exports = (sequelize, Sequelize) => {
  const Agreements = sequelize.define(
    "agreements",
    {
      ProjId: {
        type: Sequelize.STRING,
        primaryKey: true,
        field: 'PROJ_ID',
      },
      PohId: {
        type: Sequelize.INTEGER,
        field: 'POH_ID',
      },
      BasePohId: {
        type: Sequelize.INTEGER,
        field: 'BASE_POH_ID',
      },
      PoNumber: {
        type: Sequelize.STRING,
        field: 'PO_NUMBER',
      },
    },
    {
      timestamps: false,
      underscored: true,
      paranoid: true,
      tableName: 'INTERFACE.MDR_EXPORTED_AGREEMENTS'
    }
  );

  return Agreements;
};
