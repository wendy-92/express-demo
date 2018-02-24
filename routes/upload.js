var express = require('express');
var router = express.Router();
var app = express()
var multer  = require('multer')
var upload = multer({dest: 'test/'})
/* GET users listing. */
router.post('/profile', upload.single('avatar'), function(req, res, next) {
  console.log(req.file)
});

module.exports = router;
