var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

  if(req.session.islogin)
  {
      console.log('usecookie:' + req.session.islogin);
      res.locals.islogin = req.session.islogin;      
  }

  res.render('usecookie', { title: '使用cookies示例' });
});


router.get('/quit', function(req, res) {

  if(req.session.islogin)
  {
    //清除cookies
    res.clearCookie('islogin');
    //清除session
    req.session.destroy();    
    console.log("用户成功推出登录！");
  }

  res.redirect("/usecookie");
});

router.post('/', function(req, res) {
  
  req.session.islogin = 'success';
  res.locals.islogin = req.session.islogin;

  res.render('usecookie', { title: '使用cookies示例' });
});

module.exports = router;