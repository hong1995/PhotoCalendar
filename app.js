const express = require("express");
const { all } = require("express/lib/application");
const PORT = 3030;
const app = express();
const home = require("./routes/home");
 //home이라고 명시하면 index.js 파일을 자동으로 찾아가게 됨.
//이를 통해 js의 뷰를 관리하는 routes폴더의 index.js를 모듈화 하여
//이 모듈을 가져와 사용할 수 있음. spring의 indexController와 유사


app.set("views", "./view");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);



   
app.use("/", home);      //use란 미들웨어를 등록해주는 메서드.


module.exports = app;