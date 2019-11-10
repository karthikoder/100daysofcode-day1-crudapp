const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeeDB',{useNewUrlParser:true}, function(err){
    if(!err){
        console.log('mongodb connection successsful');
    }
    else{
        console.log("error in db connection:" + err);
    }
});
require('./employee.model');