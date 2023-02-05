const express = require('express');
const { RoomType } = require('../models/model');
const router = express.Router();
const { isAdmin } = require("../middlewares/isAdminMiddleware");


//all data GET 
router.get("/", async (req, res) => {
    const roomTypes = await RoomType.findAll();
    res.json({
        roomTypes: roomTypes
    })
});

// single GET 
router.get("/:roomtypeId", async (req, res) => {
    const id = req.params.roomtypeId;
    try {
        const roomType = await RoomType.findByPk(id);
        if (roomType) {
            return res.json({
                roomType: roomType
            });
        }
    }
    catch (err) {
        console.log(err)
    }

});

// create POST 
router.post("/create", isAdmin, async (req, res) => {
    const name = req.body.name;
    try {
        await RoomType.create({
            name: name
        });
        res.json({ success: "Otag gornusi üstünlikli goşuldy" })
    }
    catch (err) {
        console.log(err);
    }
})

// edit GET and POST 
router.get("/edit/:roomtypeId", isAdmin, async (req, res) => {
    const id = req.params.roomtypeId;
    try {
        const roomType = await RoomType.findByPk(id);
        if (roomType) {
            return res.json({
                roomType: roomType
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.post("/edit/:roomtypeId", isAdmin, async (req, res) => {
    const id = req.params.roomtypeId;
    const name = req.body.name;
    try {
        const roomType = await RoomType.findByPk(id);
        if (roomType) {
            roomType.name = name;
            roomType.save();
            return res.json({ success: "Otag gornusi üstünlikli duzedildi" });
        }
        res.json({ error: "Otag gornusi tapylmady" });

    }
    catch (err) {
        console.log(err);
    }
});

// delete POST 
router.delete("/delete/:roomtypeId", isAdmin, async (req, res) => {
    const id = req.params.roomtypeId;
    await RoomType.destroy({
        where: {
            id: id,
        },
    });

    res.json("Otag gornusi üstünlikli yok edildi");
});


module.exports = router;