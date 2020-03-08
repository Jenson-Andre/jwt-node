import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const userExists = await User.findOne({ where: { email: req.body.email } });

      if (userExists) {
        return await userExists(res.status(400).json({ error: 'User alredy exists.' }));
      }
    } catch (e) {
      const {
        name, email,
      } = await User.create(req.body);

      return res.json({
        name,
        email,
      });
    }
  }


  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User alredy exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password invalid.' });
    }

    const { id, name } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
