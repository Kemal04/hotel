const express = require('express');
const { User } = require('../models/model');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/register", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.findOne({ where: { email: email } });
        if (user) {
            return res.json({ error: "Email on ulanylyp dur" })
        }
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,


        });
        res.json("Giris kabul edildi");
    }
    catch (err) {
        console.log(err);
    }
});



router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.json({ error: "Ulanyjy tapylmady" });
        }

        const match = await bcrypt.compare(password, user.password)

        if (match) {
            const other = user;

            res.cookie("accessToken", jwt.sign({ id: user.id }, "secretkey"), {
                httpOnly: true,
            }).json({ other: other });

        } else {

            return res.json({ error: "password invald" });
        }
    }
    catch (err) {
        console.log(err);
    }
})


router.post("/logout", (res, req) => {
    res.clearCookie("accessToken", {
        sameSite: "none",
        secure: true
    }).json({ success: "user logged out" });
})

module.exports = router;