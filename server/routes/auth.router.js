const express = require('express');
const { User } = require('../models/model');
const router = express.Router();
const bcrypt = require('bcrypt');
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");

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
            password: hashedPassword
        });
        res.json("Giris kabul edildi");
    }
    catch (err) {
        console.log(err);
    }
});


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) res.json({ error: "Beyle ulanyjy tapylmady" });

    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.json({ error: "E-mailinizi yada acar sozunizi yalnys yazdynyz" });

        const accessToken = sign(
            { email: user.email, id: user.id },
            "importantsecret"
        );
        res.json({ token: accessToken, email: email, id: user.id });
    });
});

router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
    const id = req.params.id;

    const basicInfo = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
    });

    res.json(basicInfo);
});

module.exports = router;