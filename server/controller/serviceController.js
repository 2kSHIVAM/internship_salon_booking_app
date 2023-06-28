const AppError = require('./../utils/AppError')
const Service=require('./../models/serviceModel') 
const catchAsync = require('./../utils/catchError');

exports.addService = catchAsync(async(req,res,next)=>{
    const newService = await Service.create({
        name: req.body.name,
        short_description: req.body.short_description,
        description: req.body.description,
        duration: req.body.duration,
        limit: req.body.limit,
        cost: req.body.cost,
        ratingNumber: req.body.ratingNumber,
        star: req.body.star,
        imageLink: req.body.imageLink
    })
    res.status(201).json({
        status: 'success',
        // token,
        data: {
          newService
        }
      });
});


exports.getAllServices = catchAsync(async(req,res,next)=>{
    const allServices=await Service.find()
    res.status(200).json({
        data:allServices
    })
})
exports.getService=catchAsync(async(req,res,next)=>{
    const service = await Service.findById(req.params.id)
    res.status(200).json({
        data:service
    })
})
exports.deleteService=catchAsync(async(req,res,next)=>{
    await Service.findByIdAndDelete(req.params.id)
    res.status(200).json({
        data:"success",
    })
    next()
})

exports.updateService=catchAsync(async(req,res,next)=>{
    const updatedService=await Service.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json({
        data:updatedService
    })
    next()

})


