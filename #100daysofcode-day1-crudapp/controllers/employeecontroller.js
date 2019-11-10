const express = require('express');
var router =express.Router();
const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
router.get('/',(req,res)=>{
res.render("employee/addoredit",{
    viewtitle:"insert employee"
}); 
});
router.post('/',(req,res)=>{
    if(req.body._id == '')
    {
   insertrecord(req,res);
    }
    else
    {
        updaterecord(req,res);
    }
});
router.get('/list',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.render("employee/list",{list:docs});
        }
        else{
            console.log('error in retrieving the employee list:' + err);
        }
        console.log(docs);
    });
});
function insertrecord(req,res){
    var employee = new Employee();
    employee.fullname = req.body.fullname;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,docs)=>{
        if(!err){
            res.redirect('/list');
        }
        else{
            console.log('error during record insertion ' + err);
        } 
    })
}
router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,docs)=>{
        if(!err){
            res.render("employee/addoredit",{
                viewtitle:"update employee",
                employee:docs
            })
        }
    });
});
function updaterecord(req,res)
{
    Employee.findByIdAndUpdate({_id:req.body._id}, req.body , {new:true} , (err,docs)=>{
        if(!err){
            res.redirect('/list'); 
        }
        else{
            console.log("error occured while updating record " + err);
        }
    })
}
router.get("/delete/:id",(req,res)=>{
    Employee.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err)
        {
            res.redirect('/list');
        }
        else
        {
            console.log("error while deleting the record" + err);
        }
    })
})
module.exports= router;