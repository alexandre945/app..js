const express = require("express");
const app = express();


app.get("/",function(req,res){
     res.sendfile(__dirname + "/html/index.html");
});
app.get("/sobre",function(req,res){
    res.send("minha pagina sobre")
}) 
app.get("/blog",function(req,res){
    res.send("meu blog");
});
app.get('/ola/:cargo/:nome/:idade', function(req,res){
    res.send(req.params.cargo);
    
});








app.listen(8081,function(){
    console.log("servidor rosando na url http://locahost:8081");
});
