const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')


router.get('/', auth.verifacarToken,function(req, res, next) {
  res.json("API ON");
});

module.exports = router;
