const mongoose = require('mongoose');
var employeeschema = new mongoose.Schema({
    fullname:{
        type: String
    },
    email:{
        type: String
    },
    mobile:{
        type: String
    },
    city:{
        type: String
    },

});
mongoose.model('employee',employeeschema);
