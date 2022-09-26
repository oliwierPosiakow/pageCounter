const line = document.querySelector(".line")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const circle = document.querySelectorAll(".circle")

let lineLen = 0

next.addEventListener("click", function() {

    if(lineLen < 3)
        lineLen++

    if(lineLen === 1){
        line.style.width = "33.33%"
        next.disabled = prev.disabled = false
        
    }
    if(lineLen === 2){
        line.style.width = "66.66%"
        next.disabled = prev.disabled = false
    }
    if(lineLen === 3){
        line.style.width = "99.99%"
        next.disabled = true
        prev.disabled = false
    }
    colorCircles()
})
prev.addEventListener("click", function() {

    if(lineLen > 0)
        lineLen--

    if(lineLen === 0){
        line.style.width = "0%"
        prev.disabled = true
        next.disabled = false
    }
    if(lineLen === 1){
        line.style.width = "33.33%"
        prev.disabled = next.disabled = false
    }
    if(lineLen === 2){
        line.style.width = "66.66%"
        prev.disabled = next.disabled = false
    }
    colorCircles()
})

function colorCircles(){
    for(let i = 0; i<4;i++){
        if(i <= lineLen){
            circle[i].classList.add("active")
        }
        else{
            circle[i].classList.remove("active")
        }
    }
}
