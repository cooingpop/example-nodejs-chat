/**
 * 파일명 : routes/chat.js
 * Created by Joonyeong Park
 *
 * Description: 소켓 연결 라이브러리
 *              
 */

const obj = {};

obj.socketConnection = function (io) {

    io.on('connection', (socket) => {
        console.log('user connected');

        socket.on('message', (data) => {
            var nickname = data.nickname;
            if( !nickname ) {
                nickname = '익명';
            }
            io.emit('message','['+ nickname + '] : ' + data.message);
            console.log('message: ' + data);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });

};

module.exports = obj;