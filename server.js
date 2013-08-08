// Set firewall to redirect 80 to 8080:
// # iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080

var connect = require('connect');
var http = require('http');

connect()
.use(connect.static('public'))
.listen(8080);

