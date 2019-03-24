const express = require('express');
const router = express.Router({
  mergeParams: true,
});

router.route('/')
  .get((req, res) => {
    res.send([]);
    return;
  });

router.route('/:id')
  .get((req, res) => {
    res.send({});
    return;
  });

module.exports = router;

