const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/Join_process', (request,response) => {
  console.log('hello');
  var post = request.body;

  var person ={
    name : post.name,
    id :  post.id,
    gender: post.gender,
    email : post.email,
    birth : post.birth
  };
  console.log(person);

  fs.writeFile(`data/${post.id}`, post.pw, 'utf8', function(err){
    response.send(person);
  })
})

router.post('/login_process',(request, response)=> {
  var post =request.body;
  fs.readFile(`data/${post.id}`, 'utf8', function(err, description){
    if(err){
      console.log('아이디가 정확하지 않습니다.');
      response.send();
      return false;
    }
    console.log(post.pw);
    if(post.pw === description){
      console.log('로그인 되었습니다.');
    }
    else{
      console.log('비밀번호가 일치하지 않습니다.');
    }
  });
});

module.exports = router;
