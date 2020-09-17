const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser. urlencoded({extended: true}));

app.get("/", function(req, res){
res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/", function (req, res){
    var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height)  ;
    var BMI= weight/(height*height);
    if (BMI> 25){
        res.send("Your BMI is "+ BMI+ ". You are overweight.");
    }
    if (BMI< 18.5){
        res.send("Your BMI is "+ BMI+ ". You are underweight.");
    }
    if (BMI>= 18.5 && BMI<=24.9){
        res.send("Your BMI is "+ BMI+ ". You have healthy weight.");
    }


    
})

app.listen(3000, function (){
    console.log("Server started on port 3000");
});
