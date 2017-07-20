const express = require('express');
const server = express();

const port = process.env.PORT || 8080;
const morgan = require('morgan');
const cors = require('cors');

server.use(morgan('dev'));
server.use(cors());


server.get('/', (req, res) => {
     res.send('it works');
});


server.listen(port, () => {
   console.log(`Now listening on port ${port}`);
});
