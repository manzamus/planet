let username=document.getElementById("username")
let email=document.getElementById("email")
let password=document.getElementById("password")
let form=document.getElementById("form")


let nazifa=JSON.parse(localStorage.getItem("nazifa")) || []
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let nazifas={
        username:username.Value,
        email:email.value,
        password:password.value
}
nazifa.find((nany)=>nany.email==email.value)
nazifa.push(nazifas)
const dda=JSON.stringify(nazifas)
localStorage.setItem("nazifas",dda)
alert("byakunze")
}
)
 