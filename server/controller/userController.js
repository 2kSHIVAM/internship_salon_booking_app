const AppError = require('./../utils/AppError')
const Customer=require('./../models/customerModel')
const catchAsync = require('./../utils/catchError');

exports.signup = catchAsync(async(req,res,next)=>{
    const newUser = await Customer.create({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password,
        phone:req.body.phone,
        confirmPassword: req.body.confirmPassword,
        passwordChangedAt: req.body.passwordChangedAt
    })
    res.status(201).json({
        status: 'success',
        // token,
        data: {
          newUser
        }
      });
});

exports.login= catchAsync(async(req,res,next)=>{
    const {email,password} = req.body;
    console.log(email);
    console.log(password);
    // if email or password is not entered
    if(!email||!password)
    return next(new AppError('Please Enter the email and password',400));
    
    const user = await Customer.findOne({email}).select('+password');//here user original password is included becoz it is required in fu

    //if the user with given email is not there or his password does not match with the given password
    if(!user||! (await user.comparePassword(password,user.password)))
    return next(new AppError('Incorrect email or password',401))

    //if everything is correct send the token to the client
    // createSendToken(user,200,res)
    res.status(200).json({
        status: 'success',
        // token,
        data: {
          user
        }
      });
})


exports.addBooking = catchAsync(async(req,res,next)=>{
  // const newUser = await Customer.findOneAndUpdate({ email: req.body.email }, { booking: req.body.booking },{new:true});
  let newUser = await Customer.findOne({ email: req.body.email });

  if(newUser==null)
  {
    newUser= await Customer.create({
      email:req.body.email,
      password:"123456789",
      confirmPassword:"123456789"
    })
  }
  // console.log(newUser.booking)
  let bookings=newUser.booking
  let newBookings=[...bookings,req.body.booking]
  // console.log(newBookings)
  let newConsumer=await Customer.findOneAndUpdate({email:req.body.email},{booking:newBookings});

  res.status(201).json({
      status: 'success',
      // token,
      data: {
        newConsumer:newConsumer.booking
      }
    });
});


exports.getAllUsers = catchAsync(async(req,res,next)=>{
  const users=await Customer.find()
  res.status(201).json({
      status: 'success',
      // token,
      data: {
        users
      }
    });
});

exports.getAllAdmins = catchAsync(async(req,res,next)=>{
  const users=await Customer.find({role:'admin'})
  res.status(201).json({
      status: 'success',
      // token,
      data: {
        users
      }
    });
});

exports.requestToAdmin = catchAsync(async(req,res,next)=>{
  const user=await Customer.findOne({name:req.body.name})
  const data= user.leave_applications
  data.push({from:req.body.from,start_date:req.body.start_date,end_date:req.body.end_date,purpose:req.body.purpose})
  const result=await Customer.findOneAndUpdate({name:req.body.name},{leave_applications:data})
  res.status(201).json({
      status: 'success',
      // token,
      data: {
        result
      }
    });
});

exports.getAllRequests = catchAsync(async(req,res,next)=>{
  const user=await Customer.findOne({name:req.body.name})
  const data= user.leave_applications
  res.status(201).json({
      status: 'success',
      // token,
      data: {
        data
      }
    });
});


exports.deleteRequest = catchAsync(async(req,res,next)=>{
  const user=await Customer.findOneAndUpdate({name:req.body.name},{$pull:{leave_applications:{_id:req.body.requestId}}})
  const data= user.leave_applications
  res.status(201).json({
      status: 'success',
      // token,
      data: {
        data
      }
    });
});






exports.setBookingInactive = catchAsync(async(req,res,next)=>{
  const user=await Customer.findOne({_id:req.body.id})
  let newBooking=[]
  newBooking=user.booking
  for(let i=0;i<newBooking.length;i++){
    if(newBooking[i]._id==req.body.b_id){
      newBooking[i].status="false"
    }
    const user=await Customer.findOneAndUpdate({_id:req.body.id},{booking:newBooking})
  }


  res.status(201).json({
      status: 'success',
      // token,
      data: {
        user
      }
    });
});
