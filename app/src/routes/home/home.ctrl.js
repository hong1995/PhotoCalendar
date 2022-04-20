const output={
    hello: (req, res) =>{
        res.render("home/index.html");
    },
    login: (req,res)=>{
        res.render("home/login.html");
    },
    afterlogin: (req, res)=>{
        res.render("home/afterlogin.html");
    },
}
const users ={
    id:["jiho", "zho", "hello"],
    pswd:["1234","56","999"],
}

const process = {
    login: (req, res) =>{
        const id = req.body.id;
        const pswd = req.body.password;
        //bodyParser 모듈을 통해서 request의 post 데이터를 바로 parse해서 가공

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pswd[idx] === pswd){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success:false,
            msg: "로그인 실패!",
        });
    },
};

module.exports={
    output,
    process,
};