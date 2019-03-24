const express = require('express');

const router = express.Router({
  mergeParams: true,
});

router
  .route('/')
  .get((req, res) => {
    res.send([]);
  })
  .post((req, res) => {
    res.send('user created');
  });

router
  .route('/:id')
  .delete((req, res) => {
    res.send('user deleted');
  })
  .get((req, res) => {
    res.send({});
  })
  .put((req, res) => {
    res.send('user updated');
  });

module.exports = router;
