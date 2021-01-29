const express = require('express')
const router = express.Router();
const ObjectId = require('mongodb').ObjectID
const List = require('../../model/List');
const Board = require('../../model/Board');


/**
 * @route  GET api/lists
 * @desc   Get list per board 
 */

router.get('/:boardId', async (req, res) => {
    try {
        const lists = await List.find({ board: ObjectId(req.params.boardId) })
        res.status(200).json(lists);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});

/**
 * @route   POST api/lists
 * @desc    Create a List
 */

router.post('/:boardId', async (req, res) => {
    const boardId = req.params.boardId
    const list = new List({
        title: req.body.title,
        board: boardId
    });
    try {
        const newList = await list.save();
        await Board.updateOne({ _id: ObjectId(boardId) }, {
            $push: {
                "listsIds": [newList.id],
            }
        })
        res.status(201).json(newList);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});

/**
 * @route   PUT api/lists
 * @desc    Update list title
 */

router.put('/:listId', async (req, res) => {
    const listId = req.params.listId
    try {
        const updatedList = await List.updateOne({ _id: ObjectId(listId) }, { $set: req.body });
        res.status(200).json(updatedList);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});



module.exports = router;