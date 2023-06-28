const express = require('express');
const router= express.Router();
const teamController = require('./../controller/teamController')

router.post('/addPerson',teamController.addPerson);

router.post('/addBooking',teamController.addBooking);

router.get('/getTeam',teamController.getTeam);

router.post('/getPersonByName',teamController.getPersonByName);

router.post('/getPersonByService',teamController.getPersonByService);

router.get('/getPerson/:id',teamController.getPerson);

router.delete('/deletePerson/:id',teamController.deletePerson);

router.patch('/updatePerson/:id',teamController.updatePerson);

module.exports = router;


