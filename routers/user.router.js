const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/users', (req, res) =>{
  //the {} is the query
    User.find({}, function(err, users){
      if(err) return res.status(500).json({err: err});
      return res.status(200).json({
        users:users
      })
    });
      });

router.get('/users/:userId', (req, res)=>{
  User.find({ _id : req.params.userId }, function(err, users){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      users:users
    })
  });
    });

router.post('/users', (req, res) => {
  const newUser = new User(req.body);
  newUser.save(function(err, user){
    if(err) return res.status(500).json({err: err});
    return res.status(201).json({
      msg: "Succesfully created user"
    });
  });
});

router.put('/users/:userId', (req, res) =>{
  User.findOneAndUpdate({ _id: req.params.userId}, req.body, function(err){
    if(err) return res.status(500).json({err: err});
    return res.status(200).json({
      msg: "Succesfully updated user"
    });
  });
});

router.delete('/users/:userId', (req, res) =>{
  User.findOneAndRemove({ _id: req.params.userId}, function(err, removedUser){
    if(err) return res.status(500).json({err: err}); //look up http status codes in google
    return res.status(200).json({
      msg: "User succesfully removed"
    })
  });
});

module.exports = router;
