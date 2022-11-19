var express = require('express');
var router = express.Router();
let indexContoller = require('../controller/index');

router.get('/', indexContoller.displayHomePage);




/* GET home page. */
router.get('/home',indexContoller.displayHomePage);
      

/* GET home page. */
router.get('/project',indexContoller.displayProjectPage);




/* GET home page. */
router.get('/about',indexContoller.displayAboutPage);


/* GET home page. */
router.get('/contact',indexContoller.displayContactPage);
module.exports = router;
