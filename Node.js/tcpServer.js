/**
 * Usage: node tcpServer.js (then telnet: open _host_ _port_)
 **/

var Net = require('net');

var host = '127.0.0.1';
var port = 1337;
var server = Net.createServer(function(socket){
	socket.write('Echo Server\n');
	socket.pipe(socket);
});
server.listen(port, host);