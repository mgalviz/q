const express = require('express');
const multer  = require('multer')
const storage = require('../config/multer')
const upload = multer({storage}).single('logotipo')

const ProjectService = require('../services/ProjectService');

const router = express.Router();

const projectService = new ProjectService();

router.post('/save', async(req, resp) => {
    
    projectService.addProject(req.body)
    .then((id)=>{
        resp.status(200).json({message: 'success', id})
    })
    .catch(() => {
        resp.status(503).json({message: 'failure'})
    })
        
})

router.get('/all', async (req, resp) => {

    projectService.getAllProjects()
        .then(projects => {
            resp.status(200).json({ projects })
        })
        .catch(() => {
            resp.status(503).json({message: 'failure'})
        })
})

router.get('/delete/:id', async (req, resp) => {
    
    projectService.deleteProjectById(req.params.id)
        .then(()=>{
            resp.status(200).json({message: 'success'})
        })
        .catch((message) => {
            resp.status(503).json({message})
        })
})

router.put('/update/:id', async (req, resp) => {

   
        projectService.updateProjectById(req.params.id, req.body)  
        .then(() => {
            resp.status(200).json({message: 'success'})
        })
        .catch(() => {
            resp.status(200).json({message: 'failure'})
        })

})

 router.post('/logo', function (req, res) {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        res.status(503).json({message: 'upload failure'})
      } else if (err) {
        res.status(503).json({message: 'upload failure'})
      }
   
      res.status(200).json({message: 'success', name: req.file.filename})
      
    })
  })

module.exports = router



