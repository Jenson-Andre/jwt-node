
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('cards', {
    ID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}
export function down(queryInterface, Sequelize) { return queryInterface.dropTable('Card'); }
