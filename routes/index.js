var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.db.collection("dishes").find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
        res.render("index", {
          "dishes" : docs
        });
    }
  });
});

router.get('/dish', function(req, res, next) {
  res.render('new_dish');
});

router.post('/dish', (req, res) => {
  console.log(req.body);
})


module.exports = router;
