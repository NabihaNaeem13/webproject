const mongoose=require("mongoose");

const ingredientSubstiteSchema=new mongoose.Schema({
    ingredientName:{
        type:String,
        required:[true,"Please enter a ingredient Name!"]
    },
    substitues:[
        {
            type:String,
            required:true
        }
    ],
    icon:{
        type:String,
        required:true
    },
    allergy:{
            type:String,
            required:true
    }


},{timeseries:true})
module.exports=mongoose.model("Ingredient",ingredientSubstiteSchema)