const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('subform', { title: '我是提交表单页面'});
});


router.post('/', function(req, res, next) {
    var 
  userName = req.body.username,
  userPwd = req.body.password;


  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+userPwd);


  res.render('subform', { title: '提交表单成功！' });
});

module.exports = router;
    