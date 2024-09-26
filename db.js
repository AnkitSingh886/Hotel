const mongoose=require('mongoose')
const mongoURL="mongodb://localhost:27017/ankit"

mongoose.connect(mongoURL)

//mongoose maintains a default connection object representing the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
    console.log("mongodb connection successfull")
})
db.on('error',(err)=>{
    console.log("Error:Mongodb connection  not successfull")
})
db.on('disconnected',()=>{
    console.log("mongodb connection has been disconnected")
})

module.exports=db

