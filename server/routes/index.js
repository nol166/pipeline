const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// serve static html files
router.use(express.static('public'));

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
