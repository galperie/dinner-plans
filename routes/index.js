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
  var newDish = req.body;

  req.db.collection("dishes").insertOne(newDish, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
})


module.exports = router;
