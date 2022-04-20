
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
    })
    .then((res) => res.json())  //res.json파일은 promise형식의 파일로 받아짐. 이를 다시한번 then으로 가공 후 읽기 가능.
    // .then((res) => console.log(res));    이 함수를 밑처럼 생략가능. 함수를 1번 이상 넘길 때는 저렇게 생략이 가능함.
    // .then(console.log);   로그인 버튼을 눌렀을 시 로그인 성공했는지 실패했는지 로그에 띄움
    .then((res) => {
        if(res.success){
            location.href="/afterlogin";      //로그인 성공시 로그인성공창으로 redirect
        } else{
            alert(res.msg);         //실패 시 res.json에서 실패 시 입력해두었던 msg필드 alert
        }
    })
    .catch((error) => {
        console.error(new Error("로그인 중, 에러 발생"));
    })
}

//fetch 함수?
//데이터를 서로 주고받는 메소드. 
//입력변수로 첫째로 받을 url, 
//둘째로 보낼 데이터의 서식(객체 타입). method로 post를 명시해주어야 하고,
// headers:{"Content-Type": "application/json",}으로 json타입 객체를 보낸다고 명시해주어야 함
//또, body에서 JSON.stringify를 통해 문자열로 가공 후 전달