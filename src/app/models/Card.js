import Sequelize, { Model } from 'sequelize';

class cards extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        title: Sequelize.STRING,
        content: Sequelize.STRING,
      },
      { sequelize, timestamps: false }
    );

    return this;
  }

  static async nextId() {
    const nextId = await cards.max('id');

    return nextId + 1;
  }
}

export default cards;
