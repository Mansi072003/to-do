const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskDescription: {
        type: String,
        required: true
    },
    urgency: {
        type: String,
        enum: ['urgent', 'medium', 'low'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        enum: ['To Do', 'In Progress', 'Under Review', 'Finished'],
        required: true
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;