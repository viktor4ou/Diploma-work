let ShoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("app")) || [];
/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

/**
 * ! Generates the Cart Page with product cards composed of
 * ! images, title, price, buttons, & Total price
 * ? When basket is blank -> show's Cart is Empty
 */

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (ShoppingCart.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((x) => x.id === id) || [];
        let { img, price, name } = search;
        return `
      <div class="cart-item" id="center">
      <div class="card mb-3 text-center " >
      <div class="row " style="max-width: 1000px">
        <div class=" container col-xs-2 col-sm-2 ">
          <img src="${img}" class="img-fluid  rounded-start" style="min-width:100px ; min-height: 100px;">
        </div>
        <div class="col-12 row d-xs-block justify-content-sm-center" style="max-width:max-content;>
          <div class="card-body border">
          
          
          <div class="container col-lg-5 d-flex justify-content-center">
            <h5 class=" d-flex mt-4 h4 fw-bold" style="max-width:max-content;">${name}</h5>
          </div>

          <div class="container col-lg-4 d-flex justify-content-center">
            <div class=" mt-3" style="max-width:max-content;">
                <div class="" >
                  <i onclick="decrement(${id})" class="bi bi-dash-lg  btn h5" ></i>
                  <div id=${id} class="h5" style="display: inline;">${item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg  btn h5" ></i>
                </div>
            </div>
          </div>

          <div class="container col-lg-2 d-flex justify-content-center">
            <h3 class="d-flex h4 mt-4 text-danger fw-bold" style="max-width:max-content;">${item * price}лв.</h3>
          </div>

          <div class="container col-lg-1 ">
            <i onclick="removeItem(${id})" class="bi bi-x-lg h5  fw-bolder " style="cursor: pointer;"></i>
          </div>
          </div>
        </div>
      </div>
    </div>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
    <h2 class="fw-bold pt-3">Количката е празна</h2>
    <a href="index.html">
      <button class="btn btn-primary">Начало</button>
    </a>
    `;
  }
};

generateCartItems();

/**
 * ! used to increase the selected product item quantity by 1
 */

let increment = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("app", JSON.stringify(basket));
};

/**
 * ! used to decrease the selected product item quantity by 1
 */

let decrement = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  generateCartItems();
  localStorage.setItem("app", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

/**
 * ! Used to remove 1 selected product card from basket
 * ! using the X [cross] button
 */

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  calculation();
  generateCartItems();
  TotalAmount();
  localStorage.setItem("app", JSON.stringify(basket));
};

/**
 * ! Used to calculate total amount of the selected Products
 * ! with specific quantity
 * ? When basket is blank, it will show nothing
 */

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = shopItemsData.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    return (label.innerHTML = `
    <h2 class="fw-bold pt-3">Общo ${amount}лв.</h2>
    <div class="btn btn-primary">Поръчай</div>
    <button onclick="clearCart()" class="btn btn-danger">Премахни всичко</button>
    `);
  } else return;
};

TotalAmount();

/**
 * ! Used to clear cart, and remove everything from local storage
 */

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem("app", JSON.stringify(basket));
};
