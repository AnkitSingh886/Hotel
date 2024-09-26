const express=require('express')
const router=express.Router();
const person=require('./../models/person'); 

router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newPerson=new person(data);

        const response=await newPerson.save();

        console.log("data saved");
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error:"Internal server not working"});
    }
});


router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log("Data fetched successfully");
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        console.log("Error while fetching data")
        res.status(500).json({error:"Internal server not working"})
    }
}) 

router.get('/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType==='chef' || workType==='waiter' || workType==='manager'){
            const data=await person.find({work:workType})
            console.log("Data fetched succesfully");
            res.status(200).send(data);
        }
        else{
            res.send("Invalid workType Entered ")
        }
    }
    catch(err){
        console.log("Error while fetching data")
        res.status(500).json({Error:"Internal server not working"})
    }
})

router.put('/:id',async(req,res)=>{
    
    try{
        const idToChange=req.params.id;
        const updatedData=req.body;
        const response=await person.findByIdAndUpdate(idToChange,updatedData,{
            new:true,
            runValidators:true
        });
        if(!response){
            return res.status(404).json({Error:"Error:Person not found"})
        }
        console.log("Data updated succesfully")
        res.status(200).json(response)
    }
    catch(err){
        console.log("Error while updating data")
        res.status(500).json({Error:"Internal server not working"})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const idtodelete=req.params.id;
        const response=await person.findByIdAndDelete(idtodelete)
        if(!response){
            return res.status(404).json({error:'Person not found'})
        }
        console.log('Data deleted successfully')
        res.status(200).json({message:'Data deleted successfully'})
    }
    catch(err){
        console.log("Error while deleting data")
        res.status(500).json({Error:"Internal server not working"})
    }
})

module.exports=router