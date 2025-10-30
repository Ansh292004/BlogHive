const mongoose=require('mongoose');
const Schema = mongoose.Schema;
//this is the schema for the blogs
const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    
    body:{
        type:String,
        required:true, 
    },
    coverImageUrl:{
        type:String,
        required:false,
    },

    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    },

},
    {timestamps:true});


const Blog=mongoose.model('blog',blogSchema);















//ALL EXPORTS OF THIS FILE----------------------------------------------------
module.exports={
    Blog,

};
