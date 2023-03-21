let shop = document.getElementById("shop");

/**
 * ! Basket to hold all the selected items
 * ? the getItem part is retrieving data from the local storage
 * ? if local storage is blank, basket becomes an empty array
 */

let basket = JSON.parse(localStorage.getItem("app")) || [];

/**
 * ! Generates the shop with product cards composed of
 * ! images, title, price, buttons, description
 */

let generateShop = () => {
  return (shop.innerHTML = shopItemsData.filter((x) => x.id === "g3")
    .map((x) => {
      let { id, name, desc1, desc2, desc3, img, price } = x;
      let search = basket.find((y) => y.id === id) || [];
      return `
    <div id=product-id-${id} class="item" style="display:none;">
      <img width="220" src=${img} alt="">
      <div class="details">
        <h3>${name}</h3>
        <p>${desc1}</p>
        <div class="price-quantity">
          <h2>${price}лв.</h2>
          <div style="display:none;" id=${id} >${search.item === undefined ? 0 : search.item}</div>
          <div class="buttons">
            <button onclick="addToCart(${id})">Add to cart</button>
          </div>
        </div>
      </div>
  </div>
  
  <section class="p-3">
    <div class="container-fluid bg-light border ">
  <!--Заглавие-->
  <div class="container-fluid mb-2 text-end ">
    <p class="display-3 fw-bold text-center border-bottom pb-1 border-primary border-bottom-4">${name}</p>
  </div>
  
  <!--Продукт начало-->
  <div class="container-xll border d-flex mb-4 row d-flex justify-content-center" >
  <!--Снимка carousel начало-->
   <div class="container bg-light shadow-lg col-lg-1 col-md-1  me-5 ms-3 mt-3 ms-lg-5 mx-md-0 mx-xl-1 mx-xxl-5 pt-5 " style="width: 430px;">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators ">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="${img}"  class="d-block w-100 mb-5" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="${img}" class="d-block w-100 mb-5" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
        <div class="carousel-item">
          <img src="${img}" class="d-block w-100 mb-5" alt="...">
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!--Снимка carousel край-->

  <!--Описание начало-->
  <div class="container-fluid fw-bold col-md-2 col-lg-2 col-xl-2 col-xxl-2 pt-3 mx-md-2 mx-lg-5 mt-5" >
    <div class="card" style="width: 15rem;">
      <div class="card-header h5 text-center">
        Характеристики
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-truncate"style="min-width: 100px;">${desc1}</li>
        <li class="list-group-item text-truncate"style="min-width: 100px;">${desc2}</li>
        <li class="list-group-item text-truncate"style="min-width: 100px;">${desc3}</li>
        <li class="list-group-item text-truncate link-primary"  style="min-width: 100px;"><a href="#properties">пълни характеристики <i class="bi bi-arrow-down "></i></a></li>
      </ul>
    </div>
  </div>  
  <!--Описание край-->

  <!--Цена начало-->
  <div class="container-fluid border shadow-lg bg-light col-md-6 col-lg-7 col-xl-5 col-xxl-5  m-md-5 ms-lg-5 mt-3 ms-3 mt-3 mx-xxl-5 py-5" style="width: 300px;">
    <div class="card " >
      <div class="card-body d-flex justify-content-center">
        <span>
          <h3  class="card-link text-danger fw-bold pt-3" >${price}лв.</h3>
        </span>
      </div>
      </div>
      <ul class="list-group list-group-flush fw-bold shadow-lg text-center mt-3">
        <li class="list-group-item text-success"><i class="bi bi-truck h5 "></i>&nbspБърза доставка</li>
        <li class="list-group-item text-warning "><i class="bi bi-star-fill"></i>&nbspВисоко качество</li>
        <li class="list-group-item text-primary"><i class="bi bi-box-arrow-left"></i>&nbspПраво на връщане</li> 
      </ul>
      <div class="card-body justify-content-center d-flex mt-4">
        <button class="btn btn-primary text-center fw-bold p-2 d-flex display-3" onclick="addToCart(${id})"><i class="bi bi-cart3"></i>&nbspДобави в количката</button>
      </div>
  </div>
  </div>
</div>
</section>
    `;
    })
    .join(""));
};

let addToCart = (id) => {
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

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("app", JSON.stringify(basket));
};

let show = () => {
  generateShop();
  addToCart(id);
  update(id);
  calculation();
};

/**
 * ! used to increase the selected product item quantity by 1
 */



/**
 * ! To update the digits of picked items on each item card
 */

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
