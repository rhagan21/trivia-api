var express = require('express');
var apiRouter = express.Router();
var sample_quiz = require('./../quiz_fixture.js');
var quiz = require('./../quiz.js');

apiRouter.get('/', function(req, res) {
 res.json({ message: 'hooray! your API is working!' });
});

apiRouter.get('/sample', function(req, res) {
   res.json(sample_quiz);
});

apiRouter.get('/category/:category', function(req, res) {
 quiz
   .getQuiz(req.params)
   .then(function(result){res.json(result);});
});

apiRouter.get('/category/:category/difficulty/:difficulty', function(req, res) {
 quiz
   .getQuiz(req.params)
   .then(function(result){res.json(result);});
});

apiRouter.get('/category/:category/difficulty/:difficulty/count/:count', function(req, res) {
 quiz
   .getQuiz(req.params)
   .then(function(result){res.json(result);});
});

module.exports = apiRouter;
