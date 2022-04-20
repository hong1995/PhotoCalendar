const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
    //세션확인기능 예정
    res.render("home/index.html");
});

router.get("/login", (req,res)=>{
    res.render("home/login.html");
});


module.exports = router;