const express = require('express');
const { RoomType } = require('../models/model');
const router = express.Router();

//all data GET 
router.get("/", async (req, res) => {
    const roomtypes = await RoomType.findAll();
    res.json({
        roomtypes: roomtypes
    })
});

// single GET 
router.get("/:roomtypeId", async (req,res) => {
    const id = req.params.roomtypeId;
    try{
        const roomtype = await RoomType.findByPk(id);
        if(roomtype){
            return res.json({
                roomtype:roomtype
            });
        }
    }
    catch(err){
        console.log(err)
    }

});

// create POST 
router.post("/create", async (req,res) => {
    const name = req.body.name;
    try{
        await RoomType.create({
            name:name
        });
        res.json({success : "Otag gornusi üstünlikli goşuldy"})
    }
    catch(err){
        console.log(err);
    }
})

// edit GET and POST 
router.get("/edit/:roomtypeId", async (req, res) => {
    const id = req.params.roomtypeId;
    try {
        const roomtype = await RoomType.findByPk(id);
        if (roomtype) {
            return res.json({
                roomtype: roomtype
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.post("/edit/:roomtypeId", async (req, res) => {
    const id = req.params.roomtypeId;
    const name = req.body.name;
    try {
        const roomtype = await RoomType.findByPk(id);
        if(roomtype){
            roomtype.name = name;
            roomtype.save();
            return  res.json({success: "Otag gornusi üstünlikli duzedildi" });
        }
        res.json({error: "Otag gornusi tapylmady"});
        
    }
    catch (err) {
        console.log(err);
    }
});

// delete POST 
router.delete("/delete/:roomtypeId", async (req, res) => {
    const id = req.params.roomtypeId;
    await RoomType.destroy({
      where: {
        id: id,
      },
    });
  
    res.json("Otag gornusi üstünlikli yok edildi");
  });


module.exports = router;