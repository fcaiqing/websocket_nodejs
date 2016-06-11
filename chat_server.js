
var ws=require("nodejs-websocket");
var server=ws.createServer();	//create websocket server.
server.addListener("connection", function(conn){	//Listening connection.
	//conn.send("hi,I'am server.");	//send response.
	conn.addListener("text", function(message){		//Listening msg from client.
	//console.log('start');
	broadcast(message);	//send msg to all clients.
	//conn.send(message);
	console.log("Received msg:"+ message);
	});
});
server.addListener("close", function(conn){
	server.broadcast("Disconnectd: "+ conn.id);
});
server.listen(8000, "192.168.1.126");
console.log("node.js server is running.");
function broadcast(msg) {
    server.connections.forEach(function (conn) {
        conn.sendText(msg)
    })
}