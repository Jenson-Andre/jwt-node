import card from '../models/Card';


class CardController {
  async index(req, res) {
    return res.json(card);
  }

  show(req, res) {
    return res.json(card);
  }

  async store(req, res) {
    const { title, content, ID } = req.body;
    const placing = {
      title,
      content,
      ID,
    };

    card.create(placing);

    return res.json(placing);
  }

  update() {}

  delete() {}
}

export default new CardController();
