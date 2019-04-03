
// 사용할 모듈 import
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');

// express 객체 생성
const app = express();
const port = 80;

// api 사용 request body를 json 형식으로 변환 모듈
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// join(a,b) a와 b를 문자열을 묶음
// views, 템플릿이 있는 디렉토리
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static path 추가
app.use('/public', express.static('public'));

// 라우팅 추가
app.use('/chat', require('./web/chat'));

app.get('/', (req, res) => {
  res.redirect('chat');
});

const server = http.createServer( app).listen(port, function() {
  console.log('Listening on port ', port);
});

var io = require('socket.io').listen(server);

require('./routes/chat').socketConnection(io);