
const { json, urlencoded } = require("express.js");
const express= require("express.js");
const app= express.Router();
const http=require("http");
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res,next)=>{
// res.write("hello")
res.sendFile( "C:/Users/dhpar/weatherProject/index.html")





});

app.post("/",(req,res,next)=>{
    const query=req.body.cityName
    const apiKey="***************"
    const unit="imperial"
    const url= "http://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
        http.get(url,(response)=>{
            console.log(response.statusCode)
            
            response.on("data",(data)=>{
             const weatherData=  JSON.parse(data)
             const temp=weatherData.main.temp
             const weatherDescription=weatherData.weather[0].description
            const icon =weatherData.weather[0].icon
             const feelsLike=weatherData.main.feels_like;
           const humidity=weatherData.main.humidity;
            const imageUrl=" http://openweathermap.org/img/wn/"+icon +"@2x.png"
             res.write("<p>The weather is currently "+weatherDescription+"</p>");
    res.write("<h1>The temperature in "+query+" is "+temp+" degrees Celcius.</h1>");
                 res.write("<p>Feels Like"+feelsLike+"</p>");
                 res.write("<p>Humidity "+humidity+"</p>");
    res.write("<img src="+ imageUrl+">"); 
    res.send()
            })
        })

})











module.exports=app;
