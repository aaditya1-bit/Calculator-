const firstInput = document.getElementById("num1") as HTMLInputElement
const secondInput = document.getElementById("num2")as HTMLInputElement


const addButton = document.getElementById("Add")as HTMLButtonElement
const subButton = document.getElementById("Sub")as HTMLButtonElement
const mulButton = document.getElementById("Mul")as HTMLButtonElement
const divButton = document.getElementById("Div")as HTMLButtonElement
const modButton = document.getElementById("Mod")as HTMLButtonElement
const expButton = document.getElementById("EXP")as HTMLButtonElement
const result = document.getElementById("output")as HTMLElement

function add (a:number,b:number){
    let output = a+b;
    result.textContent = output.toString();
}

function sub (a:number ,b:number){
    let output =a-b;
    result.textContent=output.toString();
    return output;
}
function mul (a:number,b:number){
    let output= a*b;
    result.textContent=output.toString();
}
function div(a:number,b:number){
    
     let output =a/b
     result.textContent= output.toString();
     
}
function mod(a:number, b:number){
    let output = a % b
    result.textContent=output.toString();
}
function exp(a:number,b:number){
    let output = Math.pow(a,b)
    result.textContent=output.toString();
}



addButton.addEventListener("click",()=>{
    let num1 = parseFloat(firstInput.value)
    let num2 = parseFloat(secondInput.value)
    add(num1,num2)
}) 
subButton.addEventListener("click",()=>{
      let num1= parseFloat(firstInput.value)
      let num2= parseFloat(secondInput.value)
      sub(num1,num2)
})
mulButton.addEventListener("click",()=>{
     let num1= parseFloat(firstInput.value)
     let num2= parseFloat(secondInput.value)
    mul(num1,num2)
})
divButton?.addEventListener("click",()=>{
    let num1= parseFloat(firstInput.value)
    let num2= parseFloat(secondInput.value)
    div(num1,num2)
})
modButton.addEventListener("click",()=>{
    let num1 = parseFloat(firstInput.value)
    let num2 = parseFloat(secondInput.value)
    mod(num1,num2)
})
expButton.addEventListener("click",()=>{
    let num1 = parseFloat(firstInput.value)
    let num2 = parseFloat(secondInput.value)
    exp(num1,num2)
})