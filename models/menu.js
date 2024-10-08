const mongoose=require('mongoose')

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    ingredients:{
        type:String,
        default:0
    },
    num_sales:{
        type:Number,
        default:0
    }
})
const menuItem=mongoose.model('menuItem',menuSchema);
module.exports=menuItem;