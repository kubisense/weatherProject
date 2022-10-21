const express=require("express");
const appRouter=require("./routes/app") ;

const app= express();
const bodyParser=require("body-parser")
app.use("/",appRouter);

app.use(bodyParser.urlencoded({extended:true}))








app.listen(3000,(req,res,next)=>{

console.log("server is running");

});