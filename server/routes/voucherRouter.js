const express = require('express');
const router= express.Router();
const voucherController = require('./../controller/voucherController')


router.post('/addVoucher',voucherController.addVoucher);
router.get('/getAllVouchers',voucherController.getAllVoucher);

router.post('/getVoucherByCode',voucherController.getVoucherByCode)
// router.get('/getVoucher/:id',voucherController.getService);

router.delete('/deleteVoucher/:id',voucherController.deleteVoucher);
router.patch('/updateVoucher/:id',voucherController.updateVoucher);

module.exports = router;
