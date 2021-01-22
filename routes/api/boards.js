const express = require('express')
const router = express.Router();
const Board = require('../../model/Board');


/**
 * @route   GET api/boards
 * @desc    Get All board 
 */

router.get('/', async (req, res) => {
    try {
        const boards = await Board.find().sort({ date: "-1" });
        res.status(200).json(boards);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


/**
 * @route   POST api/boards
 * @desc    Create a Board
 */

router.post('/', async (req, res) => {
    const board = new Board({
        name: req.body.name,
        color: req.body.color,
        team: req.body.team,
    });
    try {
        const newBoard = await board.save();
        res.status(201).json(newBoard);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


/**
 * @route   GET api/boards
 * @desc    Get specific board 
 */
router.get('/:boardId', async (req, res) => {
    try {
        const board = await Board.findById(req.params.boardId)
        res.status(200).json(board);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});




module.exports = router;