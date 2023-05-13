const Users = require('../models/users.model');
const bcrypt = require('bcrypt');   
const jwt = require('jsonwebtoken');
require('dotenv').config();


const login = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) {
            const equals = bcrypt.compareSync(req.body.password, user.password);
            if (equals) {
                let token = jwt.sign({
                    user: user
                }, process.env.SECRET_KEY, {
                    expiresIn: process.env.EXPIRES_IN
                });
                res.status(202).json({
                    user: user,
                    token: token
                });
            } else {
                res.status(401).json({
                    message: 'Invalid password'
                });
            }
        } else {
            res.status(401).json({
                message: 'Invalid email'
            });
        }
    } catch (error) {
        res.status(400).json({
            message: 'Invalid data',
            error
        });
        console.log(error);
    }
}

const signup = async (req, res) => {
    try {
        let password = req.body.password = bcrypt.hashSync(req.body.password, Number.parseInt(process.env.ROUNDS));
        const user = await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: password
        });
        const token = jwt.sign({
            user: user
        }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRES_IN
            });
        res.status(201).json({
            user: user,
            token: token
        });
    } catch (error) {
        res.status(400).json({
            message: 'Invalid data',
            error
        });
        console.log(error);
    }
}

// const forgotPassword = async (req, res) => {
//     try {
//         const user = await Users.findOne({
//             where: {
//                 email: req.body.email
//             }
//         });
//         if (user) {
//             const token = jwt.sign({
//                 user: user
//             }, process.env.SECRET_KEY, {
//                 expiresIn: process.env.EXPIRES_IN
//             });
//             res.json({
//                 user: user,
//                 token: token
//             });
//         } else {
//             res.status(401).json({
//                 message: 'Invalid email'
//             });
//         }
//     } catch (error) {
//         res.status(400).json({
//             message: 'Invalid data',
//             error
//         });
//         console.log(error);
//     }
// }

module.exports = {
    login,
    signup
}