const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const Card = require("../../model/Card");
const List = require("../../model/List");
const auth = require("../../middleware/auth");

/**
 * @route   GET api/cards
 * @desc    get all card per list
 */

router.get("/:listId", auth, async (req, res) => {
  const listId = req.params.listId;
  try {
    const cards = await Card.find({
      list: ObjectId(listId),
      author: req.user.id
    })
      .populate("author")
      .exec();
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   POST api/cards
 * @desc    Create a Card
 */

router.post("/:listId", auth, async (req, res) => {
  const listId = req.params.listId;
  const card = new Card({
    text: req.body.text,
    list: listId,
    author: req.user.id
  });
  try {
    const newCard = await card.save();
    await List.updateOne(
      { _id: ObjectId(listId) },
      {
        $push: { cards: newCard.id }
      }
    );
    res.status(201).json(newCard);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   DELETE api/cards
 * @desc    Delete card
 */
router.delete("/:cardId/:listId", auth, async (req, res) => {
  const cardId = req.params.cardId;
  const listId = req.params.listId;
  const id = await Card.findById({ _id: ObjectId(cardId) });
  try {
    if (id) {
      await Card.deleteOne({ _id: ObjectId(cardId) });
      await List.updateOne(
        { _id: ObjectId(listId) },
        {
          $pull: { cards: cardId }
        }
      );
      res.status(200).json({ msg: "Card deleted successfully" });
    } else {
      res.status(404).json({ msg: "Card not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   PUT api/cards
 * @desc    Update Card Props
 */
router.put("/:cardId", auth, async (req, res) => {
  const cardId = req.params.cardId;
  try {
    const card = await Card.findOne({ _id: ObjectId(cardId) });
    if (card == null) {
      res.status(404).json({ msg: "Card not found" });
    }
    if (req.body.labels) {
      let isInside = false;
      for (let a = 0; a < card.labels.length; a++) {
        const label = card.labels[a];
        if (label.color == req.body.labels.color) {
          isInside = true;
          break;
        }
      }

      if (isInside) {
        await Card.updateOne(
          { _id: ObjectId(cardId) },
          {
            $pull: {
              labels: {
                label: req.body.labels.label,
                color: req.body.labels.color
              }
            }
          }
        );
      } else {
        await Card.updateOne(
          {
            _id: ObjectId(cardId)
          },
          {
            $push: {
              labels: {
                label: req.body.labels.label,
                color: req.body.labels.color
              }
            }
          }
        );
      }
      res.status(200).json({ msg: "Card updated successfully" });
    } else {
      await Card.updateOne({ _id: ObjectId(cardId) }, { $set: req.body });
      res.status(200).json({ msg: "Card updated successfully" });
    }
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

module.exports = router;
