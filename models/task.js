const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    dueDate : {
        type : Date
    },
    priority : {
        type : String,
        required : true , 
        enum : ['low', 'medium', 'high']
    },
    status : {
        type : String,
        required : true , 
        enum : ['todo', 'in_progress', 'completed']
    },
    createdAt : {
        type : Date,
        default : Date.now
    },

});

module.exports= mongoose.model('Task', taskSchema);
