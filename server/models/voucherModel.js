const mongoose=require('mongoose');
const validator=require('validator');
const brcypt=require('bcryptjs');

const voucherSchema=new mongoose.Schema({
    name:{
        type:String
    },
    start_date:{
        type:Date,
        // required:[true,'A user must contain a phone number']
    },
    end_date:{
        type:Date
    },
    duration:{
        type:Number
    },
    code_voucher:{
        type:String
    },
    limit:{
        type:Number
    },
    voucher_type:{
        type:String,
        enum:['Flat Discount','Cashback'],
        default:'Flat Discount'
    },
    amount:{
        type:Number
    },
    min_spend:{
        type:Number
    },
    active:{
        type: String,
    },
    terms:{
        type:String,
    },

    availed:[{
            type:mongoose.Schema.ObjectId,
            ref:'Customer',
    }]

})


const Voucher = mongoose.model('Voucher',voucherSchema);
module.exports = Voucher;

