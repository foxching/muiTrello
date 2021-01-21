const express = require('express')
const router = express.Router();



/**
 * @route   GET api/lists
 * @desc    Get All lists
 * @access  Public
 */

router.get('/', (req, res) => {
    res.send("lists")
});


module.exports = router;