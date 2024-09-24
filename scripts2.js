var bulb2 = document.querySelector("#bulb2")
var btn3 = document.querySelector("#btn3")
var bulb = 0

btn3.addEventListener("click",function(){
    if(bulb == 0){
        bulb2.style.backgroundColor = "yellow"
        bulb = 1
    } else{
        bulb2.style.backgroundColor = "transparent"
        bulb = 0
    }
})

