const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const config = require('config')
const auth = require('../../middleware/auth')
const User = require('../../model/User');


/**
 * @route   POST api/auth/login
 * @desc    Login user
 */

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "User does not exists" })

            //Password validation
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: 'Wrong credentials' })
                    jwt.sign(
                        { id: user.id, name: user.name },
                        config.get('jwtSecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })
        })
});



/**
 * @route   POST api/users/register
 * @desc    Register User
 */

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Simple validation
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "User already exists" })
            const newUser = new User({
                name,
                email,
                password
            })

            //create salt
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw Error()
                    newUser.password = hash
                    newUser.save()
                        .then((user) => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
});


/**
 * @route   GET api/auth/user
 * @desc    Get User Data
 */

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => {
            res.status(201).json(user)
        })
})




module.exports = router;