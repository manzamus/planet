let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.querySelector("form")

let nazifas=JSON.parse(localStorage.getItem("nazifas")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
const userExist=nazifas.find((nazifa)=>nazifa.email==email.value)
if(nazifaExist && nazifaExist.password==password.value){
    window.location.href="../admin.html"
}else if(userExist && userExist.password!=password.value){
alert("Wrong Password")
}else{
    alert("user not exist! signup first")
    window.location.href="../signup.html"
}
})