/**
 * 파일명 : web/chat.js
 * Created by Joonyeong Park
 *
 * Description: 웹 접속
 *              
 */

const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('chat router');
    next();
});

router.get('/', function (req, res) {
    console.log('[get] chat');
    res.render('index');
});

module.exports = router