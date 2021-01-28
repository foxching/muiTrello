const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('List', ListSchema);