const express = require('express');
const router= express.Router();
const userController = require('./../controller/userController')

// // router.route('/').get(serviceController.getFewServices);
router.post('/signup',userController.signup);
router.post('/login',userController.login);
router.post('/addBooking',userController.addBooking);
// router.get('/logout',userController.logout);
// router.get('/getAllTestimonials',userController.getAllTestimonials);
// router.get('/getTestimonial/:id',userController.getTestimonial)
// router.post('/addTestimonial/:id',userController.addTestimonial)
// router.delete('/deleteTestimonial/:id',userController.deleteTestimonial)
// router.post('deactivate',userController.deactivate)
// router.get('/me',userController.getMe)

module.exports = router;


