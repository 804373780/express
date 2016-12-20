var express=require("./express.js");
var app=express("abc");
app.listen(80);

app.set("/",function(request,response){
    response.send("根目录");
})
app.set("/abc",function(request,response){
    response.send("abc");
})

app.set("/aaa",function(request,response){
    response.send("aaa");
})