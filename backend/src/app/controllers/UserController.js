import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  /**
   * List Users
   */
  async index(req, res) {
    const users = await User.findAll().catch(err => console.log(err));
    return res.json(users);
  }

  /**
   * Create User
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // Check email already registred
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }
    const { id, name, email, provider } = await User.create(req.body);
    return res.json({ id, name, email, provider });
  }

  /**
   * Update User
   */
  async update(req, res) {
    // Validate
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword, password, confirmPassword } = req.body;

    // Load info of user logged
    const user = await User.findByPk(req.userId);

    // Update email
    if (email && email !== user.email) {
      // Check email already registred
      const userExists = await User.findOne({
        where: { email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // Update Password if request
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    //
    if (password !== confirmPassword) {
      return res
        .status(401)
        .json({ error: 'Password confirmation does not match' });
    }

    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  }
}

export default new UserController();
