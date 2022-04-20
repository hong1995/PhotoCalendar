const hello = (req, res) =>{
    res.render("home/index.html");
}

const login = (req,res)=>{
    res.render("home/login.html");
}

const beauty = (req, res)=>{
    res.render("beauty.html");
}



module.exports={
    hello,
    login,
    beauty,
};