const app = require("../app");
const database = require("../db/mongodb");

const PORT = 3030;

app.listen(PORT, () => {
    console.log("서버가 가동되었습니다");
})


database.connect("mongodb://localhost:27017/testdb",
    {useNewUrlParser: true, useUnifiedTopology: true});

database.connection.on('error', console.error.bind(console, '에러가 발생했습니다'));

const Name = database.model('name', {
    name: { type: String },
});

Name.find(function (err, docs){
    if(err){
        console.log(err);
    }
    else{
        console.log(docs);
    }
}
);