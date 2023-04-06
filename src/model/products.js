const mongoose =require("mongoose");
const productSchema=mongoose.Schema({
    title:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    size:{
        enum:["XS","S","M","L","XL","XXL"],
        required:true,
        //multiple sizes
        type:[String],

  },

  shippingFees:{
    type:Boolean,
    default:false,

  }

},{timestamps:true})

module.exports=mongoose.model("product",productSchema)