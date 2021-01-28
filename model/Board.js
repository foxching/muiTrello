const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    listsIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "List" }],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Board', BoardSchema);