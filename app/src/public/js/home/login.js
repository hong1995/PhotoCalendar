
const id = document.querySelector("#id");
const password = document.querySelector("#pswd");
const submit = document.querySelector("button");
// const form = document.querySelector("form");

submit.addEventListener("click", login);
function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    fetch("login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(req)
    });
}

//fetch 함수?
//데이터를 서로 주고받는 메소드. 
//입력변수로 첫째로 받을 url, 
//둘째로 보낼 데이터의 서식(객체 타입). method로 post를 명시해주어야 하고,
// headers:{"Content-Type": "application/json",}으로 json타입 객체를 보낸다고 명시해주어야 함