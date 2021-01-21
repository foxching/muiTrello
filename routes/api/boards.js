const express = require('express')
const router = express.Router();


/**
 * @route   GET api/boards
 * @desc    Get All boards
 * @access  Public
 */

router.get('/', (req, res) => {
    res.send("boards")
});


module.exports = router;