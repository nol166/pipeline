const router = require('express').Router();

router.route('/').get((req, res) => {
  res.send('Movie Route');
});

module.exports = router;
