const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs');

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:[true,'Please provide us your email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please enter a valid email']
    },
    photo:{
        type:String,
        default:'default.jpg'
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    password:{
        type:String,
        required:[true,'Please provide us your password'],
        minlength:8,
        select:false
    },
    confirmPassword:{
        type:String,
        required:[true,'Please confirm your password'],
        validate:{
            validator: function(el){
                return el===this.password;
            },
            message:'Please enter the same password'
        }
    },

    
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpiry: Date,
    phone:{
        type:Number,
    },
    active:{
        type: Boolean,
        default: true,
        select: false
    },
    booking:[{
        name:{
            type:String
        },
        state:{
            type:String
        },
        country:{
            type:String
        },
        postalCode:{
            type:Number
        },
        remark:{
            type:String
        },
        serviceName:{
            type:[String]
        },
        employeeName:{
            type:[String]
        },
        time:{
            type:[String]
        },
        status:{
            type:String,
            default:'true'
        },
        chosenDate:{
            type:[Date]
        },
        date:{
            type:String
        },
        branch:{
            type:String
        },
        payment:{
            type:String,
            default:"Cash",
            enum:["Cash","stripe"]
        },
        availed:{
            type:String,
            default:"no",
            enum:["yes","no"]
        },
        finalPrice:{
            type:Number
        },
        cost:{
            type:[Number]
        },
        voucher_type:{
            type:String
        },
        voucher_used:{
            type:Number
        },
        testimonial:[
            {
                serviceName:{
                    type:String
                },
                commentHeading:{
                    type:String
                },
                commentDescription:{
                    type:String
                },
                service_availed:{
                    type:mongoose.Schema.ObjectId,
                    ref:'Service',
                }
            }
        ]
    }],
    leave_applications:[{
        from:{
            type:String
        },
        start_date:{
            type:String
        },
        end_date:{
            type:String
        },
        purpose:{
            type:String
        }
    }]
})

customerSchema.pre('save', async function(next){
    // if the password was not modified then we will return from the funtion
    if(!this.isModified('password'))// this.isModified() checks for the entire document whether there is any modification in the document 
    return next();

    this.password = await bcrypt.hash(this.password,12);
    this.confirmPassword=undefined;
    next();
})

customerSchema.pre('save', function(next){
    if(!this.isModified('password')||this.isNew)
    {
        next();
    }
    this.passwordChangedAt = Date.now() - 1000;
    next()
})

customerSchema.pre(/^find/,function(next){
    this.find({active:{$ne:false}});
    next();
})


customerSchema.methods.comparePassword = async function(candidatePassword,userPassword) {
    return await bcrypt.compare(candidatePassword,userPassword);
}


const Customer = mongoose.model('Customer',customerSchema);
module.exports = Customer;