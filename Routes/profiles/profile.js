//ROUTER LEVEL MIDDLEWARE 
const express = require("express");
const router = express.Router();

//@ http method GET
//@description its profile get information
//@access PUBLIC
router.get("/" , (req,res) => {
    res.send("i am profile router");
});

module.exports = router;