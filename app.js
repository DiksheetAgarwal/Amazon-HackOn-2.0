const express= require("express");

const bodyParser=require("body-parser");


const app=express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("home");
});

app.get("/product", function(req, res){
    res.render("product");
})

app.listen(3000,function(){
    console.log("Server is working in port 3000");
});