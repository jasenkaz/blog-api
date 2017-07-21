const express = require('express');
const server = express();

const port = process.env.PORT || 8080;
const morgan = require('morgan'); //middleware imports
const cors = require('cors');
const userRouter = require('./routers/user.router');  //router imports
const postRouter = require('./routers/post.router');

//wire up the middleware
server.use(morgan('dev'));
server.use(cors());
//wire up the routers
server.use(userRouter);
server.use(postRouter);

server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
