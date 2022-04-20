//indexController

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
    //세션확인기능 예정

router.get("/login", ctrl.output.login);

router.post('/login',ctrl.process.login);
//http 프로토콜의 post. 클라이언트 측에서 데이터를 전송할 때 이를 받아냄.
router.get("/beauty", ctrl.output.beauty);
module.exports = router;