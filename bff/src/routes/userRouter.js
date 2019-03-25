const express = require('express');
const { deleteUserById, getUserById, getUsers, postUser } = require('../controllers/userController');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get(getUsers)
  .post(postUser);

router
  .route('/:id')
  .delete(deleteUserById)
  .get(getUserById);

module.exports = router;
