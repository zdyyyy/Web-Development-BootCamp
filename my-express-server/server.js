const express = require("express")

const app = express();

app.get("/",function(req,res){
    res.send("<h1>gggggggg</h1>")
});

app.get("/contact",function(req,res){
    res.send("Contact me at: ");
})

app.get("/about",function(req,res){
    res.send("My name ")
})


app.listen(3000,function(){
    console.log("Server started on port 3000");
})