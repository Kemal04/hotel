const express = require('express');
const { Room } = require('../models/model');
const router = express.Router();

//all data GET 
router.get("/", async (req, res) => {
    const rooms = await Room.findAll();
    res.json({
        rooms: rooms
    })
});

// single GET 
router.get("/:roomId", async (req,res) => {
    const id = req.params.roomId
    try{
        const room = await Room.findByPk(id);
        if(room){
            return res.json({
                room:room
            });
        }
    }
    catch(err){
        console.log(err)
    }

});

// create POST 
router.post("/create", async (req,res) => {
    const roomNum = req.body.roomNum;
    const size = req.body.size;
    const capacity = req.body.capacity;
    const price = req.body.price;

    try{
        await Room.create({
            roomNum:roomNum,
            size:size,
            capacity:capacity,
            price:price
        });
        res.json({success : "Otag üstünlikli goşuldy"})
    }
    catch(err){
        console.log(err);
    }
})

// edit GET and POST 
router.get("/edit/:roomId", async (req, res) => {
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
router.post("/edit/:roomId", async (req, res) => {
    const id = req.params.roomId;
    const roomNum = req.body.roomNum;
    const size = req.body.size;
    const capacity = req.body.capacity;
    const price = req.body.price;
    try {
        const room = await Room.findByPk(id);
        if(room){
            room.roomNum = roomNum;
            room.size = size;
            room.capacity = capacity;
            room.price = price;
            room.save();
            return  res.json({success: "Otag üstünlikli duzedildi" });
        }
        res.json({error: "Otag tapylmady"});
        
    }
    catch (err) {
        console.log(err);
    }
});

// delete POST 
router.delete("/delete/:roomId", async (req, res) => {
    const roomID = req.params.roomId;
  
    await Room.destroy({
      where: {
        id: roomID,
      },
    });
  
    res.json("Otag üstünlikli yok edildi");
  });


module.exports = router;