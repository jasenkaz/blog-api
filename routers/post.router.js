const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) =>{
  res.send('getting all dem posts');
});
router.get('/posts/:postId', (req, res) =>{
  res.send('getting that one special someone');
});
router.post('/posts', (req, res) =>{
  res.send('creating that new post you requested');
});
router.put('/posts/:postId', (req, res) =>{
  res.send('updates errywhere');
});
router.delete('/posts/:postId', (req, res) =>{
  res.send('burning it down');
});


module.exports = router;
