const express = require('express');
const { User } = require('../models/model');
const router = express.Router();

//all data GET 
router.get("/", async (req, res) => {
    const users = await User.findAll();
    res.json({
        users: users
    })
});

// single GET 
router.get("/:userId", async (req,res) => {
    const id = req.params.userId;
    try{
        const user = await User.findByPk(id);
        if(user){
            return res.json({
                user:user
            });
        }
    }
    catch(err){
        console.log(err)
    }

});



module.exports = router;