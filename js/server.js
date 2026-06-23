const express=require("express");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{

res.send("Pratham Dada API");

});

app.listen(3000);
