const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
const socket = require('socket.io').listen(server);





server.listen(process.env.PORT || 3000);
