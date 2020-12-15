const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  console.log(req.body);
  try {
    const { 
      name,
      email,
      emailConfirmation,
      password,
      passwordConfirmation
    } = req.body;

    const user = await User.register({
      name,
      email,
      emailConfirmation,
      passwordConfirmation,
      password
    }, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  console.log(req.body, req.user);
  try {
    const { name, email, emailConfirmation, password, passwordConfirmation } = req.body;
    const { _id, email: userEmail } = req.user;

    const user = await User.findById(_id);
    user.name = name;

    if (userEmail !== email) {
      console.log(userEmail, email);
      user.email = email;
      user.emailConfirmation = emailConfirmation;
    }

    if (password && passwordConfirmation) {
      user.passwordConfirmation = passwordConfirmation;
      user.password = password;
    }
    await user.validate();

    if (password) await user.setPassword(password);
    await user.save({ validateBeforeSave: false });

    // good idea to change the token
    const body = { _id: user._id, email: user.email };
    const token = jwt.sign({ user: body }, 'any salty secret here');
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  console.log(req.user);
  try {
    const { email } = req.user;
    const user = await User.findOneAndDelete({ email });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
