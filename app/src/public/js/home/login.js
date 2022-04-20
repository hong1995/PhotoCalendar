
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
    console.log(req);
}