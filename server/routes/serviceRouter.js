const express = require('express');
const router= express.Router();
const serviceController = require('./../controller/serviceController')

router.post('/addService',serviceController.addService);
router.get('/getAllServices',serviceController.getAllServices);

// router.get('/getAllTestimonials',serviceController.getAllTestimonials);

router.get('/getService/:id',serviceController.getService);

router.delete('/deleteService/:id',serviceController.deleteService);
router.patch('/updateService/:id',serviceController.updateService);

module.exports = router;
