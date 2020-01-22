import Sequelize, { Model } from 'sequelize';


class Card extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        content: sequelize.STRING,
        ID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static async nextID() {
    const nextID = await Card.max('ID');

    return nextID + 1;
  }
}

export default Card;
