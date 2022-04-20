const express = require("express");
const app = express();


app.get('/index', function(요청, 응답){
    응답.send('반갑습니다');
});

app.get('/beauty', (req, res)=> res.sendFile(__dirname+'/beauty.html'));

app.get('/', (req,res)=> res.sendFile(__dirname+'/index.html'));


app.listen(8080, function(){
    console.log('listening on 8080');
});