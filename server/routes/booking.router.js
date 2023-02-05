const express = require('express');
const { Booking, Room } = require('../models/model');
const router = express.Router();
const { validateToken } = require("../middlewares/AuthMiddleware");
const { isAdmin } = require('../middlewares/isAdminMiddleware');

router.get("/", async (req, res) => {
    const bookings = await Booking.findAll({ include: Room });
    res.json({
        bookings: bookings
    });
});

router.get("/user", async (req, res) => {
    const id = req.query.userId

    const booking = await Booking.findAll({ include: Room, where: { userId: id } });
    res.json({
        booking: booking,
    });
});

router.post("/create", validateToken, async (req, res) => {
    const checkIn = req.body.checkIn
    const checkOut = req.body.checkOut;
    const phoneNumber = req.body.phoneNumber;
    const roomId = req.body.roomId;
    const userId = req.user.id;

    try {
        await Booking.create({
            checkIn: checkIn,
            checkOut: checkOut,
            phoneNumber: phoneNumber,
            roomId: roomId,
            userId: userId,
        });
        res.json({ success: "Otag üstünlikli ayyrp goyuldy" });
    }
    catch (err) {
        console.log(err);
    }
})

router.get("/edit/:bookingId", isAdmin, async (req, res) => {
    const id = req.params.bookingId;
    try {
        const booking = await Booking.findByPk(id);
        if (booking) {
            return res.json({
                booking: booking,
            });
        }
    }
    catch (err) {
        console.log(err);
    }
})

router.post("/edit/:bookingId", isAdmin, async (req, res) => {

    const id = req.params.bookingId;
    const check = req.body.check;

    try {
        const booking = await Booking.findByPk(id);
        if (booking) {
            booking.check = check;
            booking.save();
            return res.json({ success: "Bron üstünlikli uytgedildi" });
        }
    }
    catch (err) {
        console.log(err);
    }
})

// delete POST 
router.delete("/delete/:bookingId", isAdmin, async (req, res) => {
    const bookingId = req.params.bookingId;

    await Booking.destroy({
        where: {
            id: bookingId,
        },
    });

    res.json("Bron üstünlikli yok edildi");
});

module.exports = router;