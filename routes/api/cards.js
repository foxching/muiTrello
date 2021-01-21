const express = require('express')
const router = express.Router();


/**
 * @route   GET api/cards
 * @desc    Get All boards
 * @access  Public
 */

router.get('/', (req, res) => {
    res.send("cards")
});

module.exports = router;