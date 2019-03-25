const UserModel = require('../models/userModel');
const hasUserExists = require('../helpers/hasUserExists');
const logger = require('../helpers/logger');

// Just for save some time deleting
// everything in one request. This is
// not supposed to be exposed
const deleteUsers = (req, res) => {
  try {
    UserModel.find({}, (err, users) => {
      if (err) {
        logger.error(err);
        res.status(500).send(err);
      }
      users.forEach(user => {
        user.remove();
      });
      res.status(204).end();
    });
  } catch (err) {
    logger.error(req.url, {
      params: req.params,
      body: req.body,
      message: err.message,
    });
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      await UserModel.findOneAndDelete({ id }, (err, user) => {
        if (err) {
          logger.error(err);
          res.status(500).send(err);
        }
        if (user) {
          // server successfully processed the request,
          // but is not returning any content
          res.status(204).end();
        }
        // There isn't any resource with the provided id
        res.status(404).end();
      });
    }
    res.status(422).send('Missing required params');
  } catch (err) {
    logger.error(req.url, {
      params: req.params,
      body: req.body,
      message: err.message,
    });
  }
};

const getUsers = (req, res) => {
  try {
    UserModel.find({}, (err, users) => {
      if (err) {
        logger.error(err);
        res.status(500).send(err);
      }
      res.send(users.map(user => ({ id: user.id })));
    });
  } catch (err) {
    logger.error(req.url, {
      params: req.params,
      body: req.body,
      message: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    if (id) {
      await UserModel.findOne({ id }, (err, user) => {
        if (err) {
          logger.error(err);
          res.status(500).send(err);
        }
        if (user) {
          res.send({ id: user.id });
        }
        // There isn't any user with provided id
        res.status(404).end();
      });
    } else {
      res.status(422).send('Missing required params');
    }
  } catch (err) {
    logger.error(req.url, {
      params: req.params,
      body: req.body,
      message: err.message,
    });
  }
};

const postUser = async (req, res) => {
  const { id } = req.body;
  try {
    if (id) {
      const userExists = await hasUserExists(id);
      if (userExists) {
        res.status(409).send('Resource already exists');
      }
      const user = new UserModel({ id });
      await user.save();
      res.status(201).send(user);
    }

    res.status(422).send('Invalid parameters');
  } catch (err) {
    logger.error(req.url, {
      params: req.params,
      body: req.body,
      message: err.message,
    });
  }
};

const userController = {
  deleteUserById,
  deleteUsers,
  getUserById,
  getUsers,
  postUser,
};

module.exports = userController;
