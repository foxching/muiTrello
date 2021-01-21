const express = require('express')
const router = express.Router();
const Board = require('../../model/Board');


/**
 * @route   POST api/board
 * @desc    Create a Board
 * @access  Private
 */

router.post('/', async (req, res) => {
    const board = new Board({
        name: req.body.name,
        color: req.body.color,
        team: req.body.team,
        listsIds: []
    });
    try {
        const newBoard = await board.save();
        res.status(201).json(newBoard);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});

module.exports = router;