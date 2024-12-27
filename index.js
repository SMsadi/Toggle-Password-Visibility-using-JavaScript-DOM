const password = document.querySelector('#password');
const togglePassword = document.querySelector('#togglePassword');
const submit = document.querySelector('#submit');

togglePassword.addEventListener("click",()=>{
    const type = password.getAttribute("type") === "password" ? "text" : "password" ;
    password.setAttribute("type",type);

    togglePassword.classList.toggle("bi-eye");
})

submit.addEventListener("click",()=>{
    alert("Form Submitted, Thank You")
})
