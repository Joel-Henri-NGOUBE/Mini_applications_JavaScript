num1 = document.querySelector("#num1")
op = document.querySelector("#op")
num2 = document.querySelector("#num2")

result = document.querySelector("#result")
console.log([num1.value,op.value,num2.value,result])
calcul = document.querySelector("#calcul").addEventListener("click",() => {
    if(op.value === "*"){
        result.innerHTML = parseFloat(num1.value) * parseFloat(num2.value)
    }
    if(op.value === "+"){
        result.innerHTML = parseFloat(num1.value) + parseFloat(num2.value)
    }
    if(op.value === "-"){
        result.innerHTML = parseFloat(num1.value) - parseFloat(num2.value)
    }
    if(op.value === "/"){
        result.innerHTML = parseFloat(num1.value) / parseFloat(num2.value)
    }
})
console.log([num1.value,op.value,num2.value,result])


