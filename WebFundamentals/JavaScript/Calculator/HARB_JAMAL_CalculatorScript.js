var disp = document.querySelector("#display")
var num1 = ""
var num2 = ""
var op = ""

function press(num){
    num1 += num
    disp.innerText = num1
}

function setOP(operation){
    op = operation
    num2 = num1
    num1 = ""
}

function clr(){
    num1 = ""
    num2 = ""
    op = ""
    disp.innerText = 0
}

function calculate(){
    var a = parseFloat(num2)
    var b = parseFloat(num1)
    var result = 0
    if(op == "+"){
        result = a + b
    }
    else if(op == "-"){
        result = a - b
    }
    else if(op == "*"){
        result = a*b
    }
    else{
        result = a / b
    }

    disp.innerText = result
}