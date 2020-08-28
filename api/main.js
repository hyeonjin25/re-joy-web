const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const http = require('http');
const url = require('url');
const userRouter = require('./routes/user');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/user',userRouter);

app.use(function(req,res,next){
  res.status(404).send("Sorry can\'t find that");
});

app.use(function(err,req,res,next){
  console.log(err);
  res.status(500).send('Something broke!');
});

app.listen(9000,() => console.log('Example app listening on port 9000'));
