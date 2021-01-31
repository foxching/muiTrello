const express = require('express')
const router = express.Router();
const ObjectId = require('mongodb').ObjectID
const Card = require('../../model/Card');
const List = require('../../model/List');

/**
 * @route   GET api/cards
 * @desc    get all card per list
 */

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
            $push: { cards: newCard.id }
        })
        res.status(201).json(newCard);
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});

/**
 * @route   DELETE api/cards
 * @desc    Delete card
 */
router.delete('/:cardId/:listId', async (req, res) => {
    const cardId = req.params.cardId;
    const listId = req.params.listId;
    const id = await Card.findById({ _id: ObjectId(cardId) })
    try {
        if (id) {
            await Card.deleteOne({ _id: ObjectId(cardId) })
            await List.updateOne({ _id: ObjectId(listId) }, {
                $pull: { cards: cardId }
            })
            res.status(200).json({ msg: "Card deleted successfully" });
        } else {
            res.status(404).json({ msg: "Card not found" });
        }
    } catch (err) {
        res.status(500).json({ err: err.msg });
    }
});


module.exports = router;