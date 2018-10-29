var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
require("./router/main.js")(app);
var xdata;

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('chat message',function(msg){

        console.log(msg);
        
        io.emit('client message', msg);
        setTimeout(function(){
            io.emit('server message', 'Welcome to NodeJS Socket World');
        },2000);
        
    });
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });

  });

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.html");
});

http.listen(3000,()=>{
    console.log("Server listen at Port 3000");
});