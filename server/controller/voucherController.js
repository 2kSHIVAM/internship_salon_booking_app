const AppError = require('./../utils/AppError')
const Voucher=require('./../models/voucherModel') 
const catchAsync = require('./../utils/catchError');

exports.addVoucher = catchAsync(async(req,res,next)=>{
    const newVoucher = await Voucher.create({
        name: req.body.name,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        duration: req.body.duration,
        code_voucher:req.body.code_voucher,
        voucher_type:req.body.voucher_type,
        min_spend:req.body.min_spend,
        limit: req.body.limit,
        terms:req.body.terms,
        amount: req.body.amount,
        active: req.body.active,
    })
    res.status(201).json({
        status: 'success',
        // token,
        data: {
          newVoucher
        }
      });
});


exports.getAllVoucher = catchAsync(async(req,res,next)=>{
    const voucher=await Voucher.find()
    res.status(200).json({
        data:voucher
    })
})

exports.getVoucherByCode=catchAsync(async(req,res,next)=>{
    const voucher=await Voucher.findOne({code_voucher:req.body.code_voucher});
    res.status(200).json({
        data:voucher
    })
})

exports.getVoucher = catchAsync(async(req,res,next)=>{
    const voucher=await Voucher.findById(req.params.id)
    res.status(200).json({
        data:voucher
    })
})


exports.deleteVoucher=catchAsync(async(req,res,next)=>{
    await Voucher.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status:'success'
    })
})
exports.updateVoucher=catchAsync(async(req,res,next)=>{
    const updatedVoucher=await Voucher.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({
        status:'success',
        data:updatedVoucher
    })
})
