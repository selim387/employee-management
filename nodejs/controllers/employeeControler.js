const express=require('express');
var router=express.Router();
var {Employee}=require('../models/employee');
var ObjectId=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>{

Employee.find((err,docs)=>{
if(!err){res.send(docs);}
else{console.log('Error in retreiving Employees:'+JSON.stringify(err,undefined,2));}
});

});
router.get('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`no record with given id:${req.params.id}`);
Employee.findById(req.params.id),(err,doc)=>{
    if(!err){res.send(doc);}
else{console.log('Error in retreiving Employees:'+JSON.stringify(err,undefined,2));}
}
});
router.post('/',(req,res)=>{
var emp=new Employee({
name:req.body.name,
position:req.body.position,
office:req.body.office,
salary:req.body.salary,
});
emp.save((err,doc)=>{
    if(!err) {res.send(doc);}
    else {console.log('error in employee save :'+JSON.stringify(err,undefined,2));}
});
});
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id:${req.params.id}`);
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary,
        });
        Employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,doc)=>{
            if(!err) {res.send(doc);}
    else {console.log('error in employee save :'+JSON.stringify(err,undefined,2));}
        });

});
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no record with given id:${req.params.id}`);
Employee.findByIdAndRemove(req.params.id,(err,dec)=>{
    if(!err) {res.send(doc);}
    else {console.log('error in employee save :'+JSON.stringify(err,undefined,2));}
});
});
module.exports=router;