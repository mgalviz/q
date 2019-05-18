const Project = require('../models/project')

module.exports = class ProjectService {

    async addProject(project){
        
        return new Promise((resolve, reject)=>{
            Project.create(project)    
            .then(res => {
                resolve(res._id)
            })
            .catch(error => {
                reject(error)
            })
        })
    }

    async getAllProjects() {

        return new Promise((resolve, reject)=>{
            Project.find()
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                reject(error)
            })
        })
    } 

    async deleteProjectById(id) { 
     
        return new Promise((resolve, reject)=>{
            Project.deleteOne({_id: id})
            .then(res => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
        })
        

    }

    async updateProjectById(id, updatedProject) {

        return new Promise((resolve, reject)=>{
            Project.findByIdAndUpdate(id, updatedProject)
            .then(res => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
        })
        
    }
}