const express = require("express");
const { all } = require("express/lib/application");
const app = express();

app.get("/", (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello</title>
    </head>
    <body>
      <input type="text" placeholder="아이디"><br>
      <input type="text" placeholder="비밀번호"><br>
      <button>로그인</button>
    </body>
    </html>`);
});

app.get("/login", (req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello</title>
    </head>
    <body>
      <input type="text" placeholder="아이디"><br>
      <input type="text" placeholder="비밀번호"><br>
      <button>로그인</button>
    </body>
    </html>`);
});

app.listen(3030, function(){
    console.log("서버가 가동되었습니다");
})