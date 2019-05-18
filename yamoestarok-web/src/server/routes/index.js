const {Router} = require('express');
const projectController = require('../controllers/ProjectController');

const router = new Router();

router.use('/project', projectController)



module.exports = router