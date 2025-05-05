const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    } ,
    name: {type:String,required:true},
    price: {type:Number,required:true},
    description: {type:String},
    category: {type:String,required:true} ,
    brand: {type:String,required:true},
    images: {type:String}

},{timestamps:true})

// productSchema.pre('save',async function(next){
//     if(!this.id){
//         this.id=Date.now()
//     }
//     next();
// })



module.exports=mongoose.model('Product',productSchema)