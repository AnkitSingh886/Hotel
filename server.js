const express=require('express');
const app=express();

const db=require('./db');

const bodyParser=require('body-parser')
app.use(bodyParser.json()); //incoming data ko process karke req.body mein store kar rha 

const person=require('./models/person')
const menuItem=require('./models/menu')
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes')

const dotenv=require("dotenv").config();

const port=process.env.PORT || 5000;

app.get('/',function(req,res){
    res.send("Welcome to our first nodejs application by ankit")
});

app.use('/person',personRoutes);

app.use('/menu',menuRoutes)

app.listen(port,function(req,res){
    console.log(`Server is running on port:${port}`)
});

// const data=req.body;
//     const newPerson=new person(data);
//     // newPerson.name=data.name;
//     // newPerson.age=data.age
//     // newPerson.mobile=data.mobile
//     // newPerson.email=data.email
//     // newPerson.address=data.address
//     newPerson.save((error,savedPerson)=>{
//         if(error){
//             console.log("error saving person",error);
//             res.status(500).json({error:'internal server error'})
//         }
//         else{
//             console.log("Data saved successfully");
//             res.status(200).json(savedPerson);
//         }
//     });