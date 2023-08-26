const mongoose=require('mongoose');
const validator=require('validator');
const brcypt=require('bcryptjs');

const serviceSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    imageLink:{
        type:String,
        default:'default.jpg'
    },
    short_description:{
        type:String,
    },
    category:{
        type:String
    },
    description:{
        type:String,
    },
    duration:{
        type:Number,
    },
    limit:{
        type:Number,
    },
    cost:{
        type:Number,
    },
    ratingNumber:{
        type:Number,
    },

    star:{
        type:Number,
    },
    active:{
        type: Boolean,
        default: true,
        select: false
    }
    
})


const Service = mongoose.model('Service',serviceSchema);
module.exports = Service;

