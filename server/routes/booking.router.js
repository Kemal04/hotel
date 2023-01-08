const express = require('express');
const { Booking, Room } = require('../models/model');
const router = express.Router();

router.get("/", async (req,res) => {
        
        const booking = await Booking.findAll({ include: Room});
        res.json({
            booking: booking
        });
    }
);

router.get("/create", async (req, res) => {
    const chekIn = req.body.chekIn
    const chekOut = req.body.chekOut;
    const roomId = req.body.roomId;
    const userId = req.body.userId;

    try {
        await Booking.create({
            chekIn: chekIn,
            chekOut: chekOut,
            roomId: roomId,
            userId: userId,
        });
        res.json({ success: "Otag üstünlikli ayyrp goyuldy" });
    }
    catch (err) {
        console.log(err);
    }
})


module.exports = router;