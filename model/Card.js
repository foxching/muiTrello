const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    labels: {
        type: Array
    },
    dueDate: {
        type: String,
        required: true
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Card', CardSchema);