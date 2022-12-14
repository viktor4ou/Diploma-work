let myCart = document.getElementById("myCart") //span = "0";(badge)
let myCartButton = document.getElementById("myCartButton") //
let counter = 0;

myCartButton.addEventListener("click",seksbog34slqto) // ako se natisne butona se pravi tova

function seksbog34slqto (){

myCart.textContent = `${counter += 1}`
    if(myCart.textContent >= 99)
    {
        myCart.textContent = "99+";
    }
}

let inputs = document.getElementById("search");
let container = document.getElementById('container');

inputs.addEventListener("input",clickedInput)

function clickedInput (){
container.innerHTML = `

`;
}