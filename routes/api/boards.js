const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const Board = require("../../model/Board");
const auth = require("../../middleware/auth");

/**
 * @route   GET api/boards
 * @desc    Get All board per user authenticated
 */

router.get("/", auth, async (req, res) => {
  try {
    const boards = await Board.find({ author: req.user.id })
      .populate("author")
      .exec();
    res.status(200).json(boards);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   POST api/boards
 * @desc    Create a Board
 */

router.post("/", auth, async (req, res) => {
  const board = new Board({
    name: req.body.name,
    color: req.body.color,
    team: req.body.team,
    author: req.user.id
  });
  try {
    const newBoard = await board.save();
    res.status(201).json(newBoard);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   PUT api/boards
 * @desc    Set Board background
 */

router.put("/:boardId", auth, async (req, res) => {
  const boardId = req.params.boardId;
  const id = await Board.findById({ _id: ObjectId(boardId) });
  try {
    if (id) {
      await Board.updateOne({ _id: ObjectId(boardId) }, { $set: req.body });
      res.status(200).json({ msg: "Board Background updated Successfully" });
    } else {
      res.status(404).json({ msg: "Board not found" });
    }
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

/**
 * @route   GET api/boards
 * @desc    Get specific board
 */
router.get("/:boardId", auth, async (req, res) => {
  try {
    const board = await Board.findById(req.params.boardId);
    res.status(200).json(board);
  } catch (err) {
    res.status(500).json({ err: err.msg });
  }
});

module.exports = router;
