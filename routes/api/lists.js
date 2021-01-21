const express = require('express')
const router = express.Router();
const List = require('../../model/List');

/**
 * @route   POST api/lists
 * @desc    Create a List
 * @access  Private
 */

router.post('/', async (req, res) => {
    const list = new List({
        title: req.body.title,
    });
    try {
        const newList = await list.save();
        res.status(201).json(newList);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


module.exports = router;