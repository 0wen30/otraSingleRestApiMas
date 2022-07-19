const {model,Schema} = require("mongoose");

module.exports = model("data",new Schema({
    name:{
        required:true,
        type:String
    },
    age:{
        required:true,
        type:Number
    }
}));