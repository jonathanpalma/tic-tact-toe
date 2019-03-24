const express = require('express');
const router = express.Router({
  mergeParams: true,
});

router.route('/')
  .get((req, res) => {
    res.send([]);
    return;
  })
  .post((req, res) => {
    res.send('user created');
    return;
  });

router.route('/:id')
  .delete((req, res) => {
    res.send('user deleted');
    return;
  })
  .get((req, res) => {
    res.send({});
    return;
  })
  .put((req, res) => {
    res.send('user updated');
    return;
  });

module.exports = router;

