
export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      allowNUll: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNUll: false,
      unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNUll: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNUll: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNUll: false,
    },
  });
}
export function down(queryInterface) { return queryInterface.dropTable('users'); }
