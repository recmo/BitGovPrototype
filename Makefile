
start:
	echo Launching server...
	nodejs server.js

setup:
	echo Setting up firewall
	sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
