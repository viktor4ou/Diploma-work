


if (document.readyState == "loading") {
    document .addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}
    
function ready(){
    let removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++){
    let button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
    }
    //Количество
    let quantityInputs = document.getElementsByClassName("cart-quantity")
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener("change",quantityChanged);
    }
    //За добавяне в количката
    let addCart = document.getElementsByClassName("add-cart");
    for(let i = 0; i < addCart.length; i++){
        let button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}
//Премахване на продукт
function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}    
//Промяна на количеството от количката
function quantityChanged(event){
    let input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1;
    }
    updatetotal();
}
//Добавяне на продукти към количката
function addCartClicked(event){
    let button = event.target;
    let shopProducts = button.parentElement;
    let title = shopProducts.getElementsByClassName("product-title");
    let price = shopProducts.getElementsByClassName("price");
    let productImg = shopProducts.getElementsByClassName("product-img").src;
    console.log(title)

}
//Общата сума
function updatetotal(){
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = cartContent.getElementsByClassName("cart-box");
    let total = 0;
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName("cart-price")[0];
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        let quantity = quantityElement.value;
        total = total +(price * quantity);

        document.getElementsByClassName("total-price")[0].innerHTML = "$" + total;

    }


}
