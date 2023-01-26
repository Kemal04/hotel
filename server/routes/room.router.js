const express = require('express');
const { Room, RoomType } = require('../models/model');
const router = express.Router();
const {isAdmin} = require("../middlewares/isAdminMiddleware");
const fs = require('fs')
const imageUpload = require("../helpers/image-upload")
const multer = require("multer");
const upload = multer({ dest: "./public/img" });


//all data GET 
router.get("/",  async (req, res) => {
    const rooms = await Room.findAll({ include: RoomType });
    res.json({
        rooms: rooms
    })
});

// single GET 
router.get("/:roomId", async (req, res) => {
    const id = req.params.roomId
    try {
        const room = await Room.findByPk(id, { include: RoomType });
        if (room) {
            return res.json({
                room: room
            });
        }
    }
    catch (err) {
        console.log(err)
    }

});

// create POST 
router.post("/create", isAdmin, async (req, res) => {
    const roomNum = req.body.roomNum;
    const size = req.body.size;
    const capacity = req.body.capacity;
    const price = req.body.price;
    const img = req.file.filename;
    const roomTypeId = req.body.roomTypeId;

    try {
        await Room.create({
            roomNum: roomNum,
            size: size,
            capacity: capacity,
            price: price,
            img:img,
            roomTypeId: roomTypeId
        });
        res.json({ success: "Otag üstünlikli goşuldy" })
    }
    catch (err) {
        console.log(err);
    }
})

// edit GET and POST 
router.get("/edit/:roomId", isAdmin, async (req, res) => {
    const id = req.params.roomId;
    try {
        const room = await Room.findByPk(id);
        if (room) {
            return res.json({
                room: room
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.post("/edit/:roomId", isAdmin, async (req, res) => {
    const id = req.params.roomId;
    const roomNum = req.body.roomNum;
    const size = req.body.size;
    const capacity = req.body.capacity;
    const price = req.body.price;

    let img = req.body.img;
    if (req.file) {
        img = req.file.filename;

        fs.unlink(".public/img/" + req.body.img, err => {
            console.log(err);
        })
    }

    const roomTypeId = req.body.roomTypeId;
    try {
        const room = await Room.findByPk(id);
        if (room) {
            room.roomNum = roomNum;
            room.size = size;
            room.capacity = capacity;
            room.price = price;
            room.img = img;
            room.roomTypeId = roomTypeId;
            room.save();
            return res.json({ success: "Otag üstünlikli duzedildi" });
        }
        res.json({ error: "Otag tapylmady" });

    }
    catch (err) {
        console.log(err);
    }
});

// delete POST 
router.delete("/delete/:roomId", isAdmin, async (req, res) => {
    const roomID = req.params.roomId;

    await Room.destroy({
        where: {
            id: roomID,
        },
    });

    res.json("Otag üstünlikli yok edildi");
});


module.exports = router;