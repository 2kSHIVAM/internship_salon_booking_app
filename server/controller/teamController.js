const AppError = require('./../utils/AppError')
const Team=require('./../models/teamModel') 
const catchAsync = require('./../utils/catchError');

exports.addPerson = catchAsync(async(req,res,next)=>{
    const newPerson = await Team.create({
        name: req.body.name,
        email: req.body.email,
        experience_years: req.body.experience_years,
        duration: req.body.duration,
        salary: req.body.salary,
        password: req.body.password,
        address: req.body.address,
        confirmPassword:req.body.confirmPassword,
        phone:req.body.phone,
        imageLink:req.body.imageLink,
        services:req.body.services
        // ratingNumber: req.body.ratingNumber,
        // star: req.body.star
    })
    res.status(201).json({
        status: 'success',
        // token,
        data: {
          newPerson
        }
      });
});


exports.addBooking = async (req, res, next) => {
    try {
      const personSlot = req.body.booking.employeeName;
      const dateSlot = req.body.booking.dates;
      const timeSlot = req.body.booking.times;
      const serviceName = req.body.booking.serviceName;
  
      for (let index = 0; index < personSlot.length; index++) {
        const element = personSlot[index];
        const person = await Team.findOne({ name: element });
  
        if (!person) {
          // Handle case when person is not found
          continue;
        }
  
        let email = person.booking.email;
        let prevDates = person.booking.dateSlots;
        let prevTime = person.booking.timeSlots;
        let prevServices = person.booking.services;
  
        email = [...email, req.body.email];
        prevTime = [...prevTime, timeSlot[index]];
        prevDates = [...prevDates, new Date(dateSlot[index]).toDateString()];
        prevServices = [...prevServices, serviceName[index]];
  
        // booking.dateSlots = prevDates;
        // person.booking.services = prevServices;
        // person.booking.timeSlots = prevTime;
        // person.booking.email = email;
  
        await Team.findOneAndUpdate({name:element},{booking:{
            email:email,
            services:prevServices,
            timeSlots:prevTime,
            dateSlots:prevDates
        }});
      }
  
      res.status(200).send({
        data: "yo",
      });
    } catch (error) {
      next(error);
    }
  };
  


exports.getTeam = catchAsync(async(req,res,next)=>{
    const team=await Team.find()
    res.status(200).json({
        data:team
    })
})
exports.getPerson=catchAsync(async(req,res,next)=>{
    const person = await Team.findById(req.params.id)
    res.status(200).json({
        data:person
    })
})

exports.getPersonByService=catchAsync(async(req,res,next)=>{
    const persons = await Team.find()
    let personn=[]
    // console.log(persons)
    persons.map((person,index)=>{
        // console.log(person)
        if(person.services.includes(req.body.service))
        personn.push(person)
    })
    // for(let i=0;i<persons.length();i++)
    // {
    //     const services=persons[i].services
    //     if(services.includes(req.body.service))
    //     person.push(persons[i])
    // }
    res.status(200).json({
        data:personn
    })
})


exports.getPersonByName=catchAsync(async(req,res,next)=>{
    const person = await Team.find({name:req.body.name})

    res.status(200).json({
        data:person
    })
})

exports.deletePerson=catchAsync(async(req,res,next)=>{
    await Team.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status:'success'
    })
})

exports.updatePerson=catchAsync(async(req,res,next)=>{
    const updatedPerson=await Team.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
            status:'success',
            data:updatedPerson
        })
})
