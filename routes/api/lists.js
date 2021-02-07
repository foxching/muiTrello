const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const Board = require("../../model/Board");
const List = require("../../model/List");
const Card = require("../../model/Card");
const auth = require("../../middleware/auth");
/**
 * @route  GET api/lists
 * @desc   Get list per board
 */

router.get("/:boardId", auth, async (req, res) => {
  try {
    const lists = await List.find({ board: ObjectId(req.params.boardId) });
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   POST api/lists
 * @desc    Create a List
 */

router.post("/:boardId", auth, async (req, res) => {
  const boardId = req.params.boardId;
  const list = new List({
    title: req.body.title,
    board: boardId
  });
  try {
    const newList = await list.save();
    await Board.updateOne(
      { _id: ObjectId(boardId) },
      {
        $push: { listsIds: newList.id }
      }
    );
    res.status(201).json(newList);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   PUT api/lists
 * @desc    Update list title
 */

router.put("/:listId", auth, async (req, res) => {
  const listId = req.params.listId;
  const id = await List.findById({ _id: ObjectId(listId) });
  try {
    if (id) {
      await List.updateOne({ _id: ObjectId(listId) }, { $set: req.body });
      res.status(200).json({ msg: "List Title Updated Successfully" });
    } else {
      res.status(404).json({ msg: "List not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   DELETE api/lists
 * @desc    Delete list
 */

router.delete("/:listId/:boardId", auth, async (req, res) => {
  const listId = req.params.listId;
  const boardId = req.params.boardId;
  const id = await List.findById({ _id: ObjectId(listId) });
  try {
    if (id) {
      await List.deleteOne({ _id: ObjectId(listId) });
      await Card.deleteMany({ list: ObjectId(listId) });
      await Board.updateOne(
        { _id: ObjectId(boardId) },
        {
          $pull: { listsIds: listId }
        }
      );
      res.status(200).json({ msg: "List deleted successfully" });
    } else {
      res.status(404).json({ msg: "List not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

module.exports = router;
