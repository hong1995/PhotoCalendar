// import {hello, login} from "./home.ctrl.js";
//import대신 

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.hello);
    //세션확인기능 예정

router.get("/login", ctrl.login);


router.get("/beauty", ctrl.beauty);
module.exports = router;