const express = require('express')
const router = express.Router();
const ObjectId = require('mongodb').ObjectID
const Card = require('../../model/Card');
const List = require('../../model/List');


router.get('/:listId', async (req, res) => {
    const listId = req.params.listId
    try {
        const cards = await Card.find({ list: ObjectId(listId) })
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
})

/**
 * @route   POST api/cards
 * @desc    Create a Card
 */

router.post('/:listId', async (req, res) => {
    const listId = req.params.listId
    const card = new Card({
        text: req.body.text,
        description: "",
        dueDate: "",
        list: listId
    });
    try {
        const newCard = await card.save();
        await List.updateOne({ _id: ObjectId(listId) }, {
            $push: {
                "cards": [newCard.id],
            }
        })
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


module.exports = router;