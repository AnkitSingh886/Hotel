const express=require('express')
const router=express.Router();

const menuItem=require('./../models/menu')

router.post('/',async(req,res)=>{
    try{
    const data=req.body;
    const newMenuItem=new menuItem(data);

    const response=await newMenuItem.save(); 
    console.log("Data Entered succesfully");

    res.status(200).json(response)
    }
    catch(err){
        console.log("Data not entered successfully");
        res.status(500).json({Error:"Internal server not working"})
    }
});

router.get('/',async(req,res)=>{
    try{
        const data=await menuItem.find({});
        console.log("Data fetched successfully");
        res.status(200).json(data)    
    }
    catch(err){
        console.log("Error while fetching data")
        res.status(500).json({Error:"Internal server not working"})
    }
});

router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=='sweet' || tasteType=='sour' || tasteType=='spicy'){
        const data=await menuItem.find({taste:tasteType});
        console.log("Data fetched successfully");
        res.status(200).json(data);      
        }
        else{
            console.log('Invalid Taste Type')
        }
    }
    catch(err){
        console.log("Error while fetching data")
        res.status(500).json({Error:"Internal server not working"})
    }
});


router.put('/:id',async(req,res)=>{
    try{
        const idtochange=req.params.id;
        const newMenuData=req.body;
        const response=await menuItem.findByIdAndUpdate(idtochange,newMenuData,{
            new:true,
            runValidators:true
        })
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

//comment added for testing
module.exports=router;


