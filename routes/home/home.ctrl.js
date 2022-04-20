const hello = (req, res) =>{
    res.render("home/index.html");
}

const login = (req,res)=>{
    res.render("home/login.html");
}





module.exports={
    hello,
    login,
};