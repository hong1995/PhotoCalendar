const express = require("express");
const app = express();
const home = require("./src/routes/home");
 //home이라고 명시하면 index.js 파일을 자동으로 찾아가게 됨.
//이를 통해 js의 뷰를 관리하는 routes폴더의 index.js를 모듈화 하여
//이 모듈을 가져와 사용할 수 있음. spring의 indexController와 유사
const bodyParser = require("body-parser");
//서로 데이터를 주고받는 api에서 사용

app.set("views", "./src/view");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use(bodyParser.json());
//bodyParser를 통해 json파일을 다룰 것을 명시
app.use(bodyParser.urlencoded({extended: true}));
//url에 들어간 한글이나 공백을 처리해줌.

app.use(express.static(`${__dirname}/src/public`));
//디렉토리 네임은 현재 파일의 위치를 반환, 그 후 /src/public으로 정적 경로로 등록

   
app.use("/", home);      //use란 미들웨어를 등록해주는 메서드.


module.exports = app;