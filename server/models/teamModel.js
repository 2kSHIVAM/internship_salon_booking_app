const mongoose=require('mongoose');
const validator=require('validator');
const brcypt=require('bcryptjs');

const teamSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    imageLink:{
        type:String,
        default:'default.jpg'
    },
    email:{
        type:String,
        required:[true,'Please provide us your email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please enter a valid email']
    },
    address:{
        type:String,
    },
    experience_years:{
        type:Number,
    },
    salary:{
        type:Number,
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
        // this only works on save/create
        // this only does not work on update
        validate:{
            validator: function(el){
                return el===this.password;
            },
            message:'Please enter the same password'
        }
    },
    phone:{
        type:Number,
        // required:[true,'A user must contain a phone number']
    },
   
    active:{
        type: Boolean,
        default: true,
        select: false
    },

    services:{
        type:[String]
    },

    leave_start:{
        type:String
    },
    leave_end:{
        type:String
    },
    booking:
        {
            email:{
                type:[String],
            },
            services:{
                type:[String]
            },
            timeSlots:{
                type:[String]
            },
            dateSlots:{
                type:[String]
            },
            durationSlots:{
                type:[String]
            }
        },
    requests:[
        {
            startDate:{
                type:Date
            },
            endDate:{
                type:Date
            },
            status:{
                type:String,
                enum:['Granted', 'Pending', 'Rejected','Modified']
            }
        }
    ]
})




const Team = mongoose.model('Team',teamSchema);
module.exports = Team;

