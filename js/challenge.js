const counter = document.getElementById("counter")
const liker = document.querySelector(".likes")
let paused = false 



//1️⃣Click minus event listener
const minus = document.getElementById("minus")
//
function clickMinus() {
    // console.log("Minus was clicked")
    counter.innerText --
    // console.log(typeof parseInt (counter.innerText))
}
minus.addEventListener("click", clickMinus)



//2️⃣ Click plus event listener
const plus = document.getElementById("plus")
//
function clickPlus() {
    // console.log("plus was clicked")
    counter.innerText ++ 
}
plus.addEventListener("click", clickPlus)


let likeObject = {}
console.log(likeObject)
//3️⃣ Click heart event listener 
const heart = document.getElementById("heart") 
//
function clickHeart() {
let heartCount = counter.textContent

if (!(heartCount in likeObject)) {
    likeObject[heartCount] = 1
    console.log(likeObject)
    const newEl = document.createElement("li")
    newEl.id = heartCount
    newEl.innerText = `${heartCount} has been liked ${likeObject[heartCount]} time`
    liker.appendChild(newEl)
} else {
    likeObject[heartCount]++
    console.log(likeObject)
    let newLi = document.getElementById(`${heartCount}`)
    newLi.innerText = `${heartCount} has been liked ${likeObject[heartCount]} times`

}
}
heart.addEventListener("click", clickHeart)






document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildComments(e.target[0].value)
    form.reset()
})
})

function buildComments(comments) {
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click", handleDelete)
    btn.textContent = "❌"
    p.textContent = `${comments}`
    p.appendChild(btn)
    document.querySelector("#list").appendChild(p)
}



function handleDelete(e) {
    e.target.parentNode.remove()
  }











//4️⃣ Click pause event listener 

//🟢 Start countup 
let start = setInterval(() => {
    counter.innerText ++ 
}, 1000)

//🛑 Pause countup
const pause = document.getElementById("pause")

//
function clickPause() {
 

    if (pause.innerText === "pause") {
        clearInterval(start)
        paused = !paused 
        pause.innerText = "resume"
        heart.disabled = true
        plus.disabled = true
        minus.disabled = true
        submit.disabled = true 


    } else {
        start = setInterval(() => {
            counter.innerText ++ 
        }, 1000)
        pause.innerText = "pause"
        heart.disabled = false
        plus.disabled = false
        minus.disabled = false
        submit.disabled = false
    }
}
pause.addEventListener("click", clickPause)




    








