const express = require('express')
const router = express.Router();
const Card = require('../../model/Card');

/**
 * @route   POST api/cards
 * @desc    Create a Card
 */

router.post('/:listId', async (req, res) => {
    const listId = req.params.listId
    const card = new Card({
        text: req.body.text,
        description: req.body.description,
        dueDate: req.body.dueDate,
    });
    try {
        const newCard = await card.save();
        
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


module.exports = router;