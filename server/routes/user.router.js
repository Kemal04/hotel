const express = require('express');
const { User } = require('../models/model');
const router = express.Router();
const { validateToken } = require("../middlewares/authMiddleware");


//all data GET 
router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json({
        users: users
    })
});

// single GET 
router.get("/:userId", async (req, res) => {
    const id = req.params.userId;
    try {
        const user = await User.findByPk(id);
        if (user) {
            return res.json({
                user: user
            });
        }
    }
    catch (err) {
        console.log(err)
    }
});

// USER edit GET and POST 
router.get("/edit", validateToken, async (req, res) => {
    const id = req.user.id;
    try {
        const user = await User.findOne({ where: { id: id } });
        if (user) {
            return res.json({
                user: user
            });
        } else {
            res.json({ error: "Ulanyjy tapylmady" });
        }
    }
    catch (err) {
        console.log(err);
    }
});

router.post("/edit", validateToken, async (req, res) => {
    const id = req.user.id;
    const surname = req.body.surname;
    const phoneNum = req.body.phoneNum;
    const address = req.body.address;
    try {
        const user = await User.findOne({ where: { id: id } });
        if (user) {
            user.surname = surname;
            user.phoneNum = phoneNum;
            user.address = address;
            user.save();
            return res.json({ success: "Maglumatlarynyz üstünlikli duzedildi" });
        }
        res.json({ error: "Ulanyjy tapylmady" });
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;