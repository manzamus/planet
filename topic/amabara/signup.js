let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.getElementById("form")


let nazifa=JSON.parse(localStorage.getItem("nazifa")) || []

form.addEventListener("submit",(e)=>{
    e.preventDefault()

let nazifas={
    username:username.value,
    email:email.value,
    password:password.value
}
nazifa.find((dda)=>dda.email==email.value)
nazifa.push(nazifas)
const ccc=JSON.stringify(nazifa)
localStorage.setItem("nazifa",ccc)
alert("byakoze")
})
    