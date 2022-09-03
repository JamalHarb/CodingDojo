var cookie = document.querySelector("footer")
function removeCookie(){
    cookie.remove()
}

var r1 = document.querySelector(".r1")
var r2 = document.querySelector(".r2")
var r3 = document.querySelector(".r3")
var r4 = document.querySelector(".r4")
var b1 = document.querySelector(".b1")
var b2 = document.querySelector(".b2")
var b3 = document.querySelector(".b3")
var b4 = document.querySelector(".b4")

function changeUnit(){
    if (document.querySelector("select").value == "°C"){
        r1.innerText = "24°"
        r2.innerText = "18°"
        r3.innerText = "27°"
        r4.innerText = "19°"
        b1.innerText = "21°"
        b2.innerText = "16°"
        b3.innerText = "26°"
        b4.innerText = "21°"
    }
    else if(document.querySelector("select").value == "°F"){
        r1.innerText = "75°"
        r2.innerText = "80°"
        r3.innerText = "69°"
        r4.innerText = "78°"
        b1.innerText = "65°"
        b2.innerText = "66°"
        b3.innerText = "61°"
        b4.innerText = "70°"
    }
}

// function changeToF(){
//     r1.innerText = "75°"
//     r2.innerText = "80°"
//     r3.innerText = "69°"
//     r4.innerText = "78°"
//     b1.innerText = "65°"
//     b2.innerText = "66°"
//     b3.innerText = "61°"
//     b4.innerText = "70°"
// }