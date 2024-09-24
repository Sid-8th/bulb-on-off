var bulb = document.querySelector("#bulb")
var body = document.querySelector("body")
var btn1 = document.querySelector("#btn1")
var btn2 = document.querySelector("#btn2")
btn1.addEventListener("click",function(){
    bulb.style.backgroundColor = "#8B8000"

})

btn2.addEventListener("click",function(){
    bulb.style.backgroundColor = "black"
})

btn1.addEventListener("click",function(){
    body.style.backgroundColor = "yellow"

})
btn2.addEventListener("click",function(){
    body.style.backgroundColor = "black"

})

