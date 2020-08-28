const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.post('/Join_process', (request,response) => {
  console.log('hello');
  //console.log(post);
  /*
  var post = request.body;
  console.log(post);

  */

  var post = request.body;

  var person ={
    name : post.name,
    id :  post.id,
    gender: post.gender,
    email : post.email,
    birth : post.birth
  };
  console.log(person);
  response.send(person);
})

/*
router.post('/login_process',(request,response)=>{
  /*var user = [
    {
      'id'=1,
      'pw'=1,
      'name'='hj',
      'gender'='F',
      'email'="1@1",
      'birth'='111111'
    },
    {
      'id'=2,
      'pw'=2,
      'name'='yk',
      'gender'='F',
      'email'="2@2",
      'birth'='222222'
    },
    {
      'id'=3,
      'pw'=3,
      'name'='kk',
      'gender'='F',
      'email'="3@3",
      'birth'='333333'
    }
  ]

  var post = request.body;
  for(i=0; i<3; i++){
    if(post.id===user[i].id){
      if(post.pw ===user[i].pw){
        console.log('로그인완료');
      }
      else{
        console.log('비밀번호가 존재하지 않습니다.');
      }
    }
    else{
      console.log('아이디가 존재하지 않습니다.');
    }
})
*/
module.exports = router;
