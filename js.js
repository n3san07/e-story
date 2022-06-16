let lorem = [
  "we have all the best new tech in the world and we are doing going to get even more ",
  "this is just a random text that i dont really want to write but i have to to finsh this projext",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ducimus recusandae quidem, doloremque nobis, esse animi sapiente delectus quisquam veritatis laboriosam quibusdam magni ullam. Maxime voluptatum porro animi commodi nesciunt!",
];
let curP = 0;
let p = document.getElementById("lorem");
function next() {
  if (curP > 1) {
    curP = 0;
  } else {
    curP++;
  }

  p.textContent = lorem[curP];
}
//////////////clock
let span = document.getElementById("clock");

function clock() {
  let nowDate = new Date().toDateString();
  span.innerHTML = nowDate;
}
//////////// cart toggle
let htmlCart = document.getElementById("cart");
let cartToggle = document.querySelector("#cartToggle");
let closeCart = document.querySelector("#close");
cartToggle.addEventListener("click", function () {
  htmlCart.classList.toggle("toggle");
});
closeCart.addEventListener("click", function () {
  htmlCart.classList.remove("toggle");
});
////////////////////////////////////
////////////////////////////////////
////////////  CART ///////////////
//////////////////////////////////



let allProducts = [
  {
    img: "img/amd-ryzen-cpu-5250769_640.jpg",
    tag: "cpu",
    description: "amd cpu",
    price: 300,
    inCart: 0,
    inWearHouse: 30,
    id: 0,
  },
  {
    img: "img/processor-4008495_640.jpg",
    tag: "cpu",
    description: "intel cpu",
    price: 250,
    inCart: 0,
    inWearHouse: 15,
    id: 1,
  },
  {
    img: "img/cooler-933691_640.jpg",
    tag: "fan",
    description: "old fan",
    price: 20,
    inCart: 0,
    inWearHouse: 5,
    id: 2,
  },
  {
    img: "img/easter-5030905_640.jpg",
    tag: "case",
    description: " a new great pc case",
    price: 300,
    inCart: 0,
    inWearHouse: 7,
    id: 3,
  },
  {
    img: "img/computer-1168203_640.jpg",
    tag: "power",
    description: " old power splay",
    price: 70,
    inCart: 0,
    inWearHouse: 30,
    id: 4,
  },
  {
    img: "img/pc-2810957_640.jpg",
    tag: "ram",
    description: "16g of ram 2800gh",
    price: 60,
    inCart: 0,
    inWearHouse: 80,
    id: 5,
  },
];

let angryGrid = document.querySelector(".angry-grid");

///////// add prodects to html /////////////

function creatHtml() {
  let innerHTML = "";

  for (let i = 0; i < allProducts.length; i++) {
    innerHTML += `
  <div id="item-${i}">
  <img src="${allProducts[i].img}" alt="${allProducts[i].tag}" />
  <div class="layout0">
    <h1>${allProducts[i].description}</h1>
    <button  onclick="addToCart(${allProducts[i].id})"  >buy now</button>
    <p>${allProducts[i].price}$</p>
  </div>
</div>
  
  
  `;
  }
  angryGrid.innerHTML = innerHTML;
}
creatHtml();

//////////  adding items to cart

let cart = JSON.parse(localStorage.getItem("cart")) || []


function addToCart(id) {
  product = allProducts.find(function (item) {
    return item.id == id;
  });

  if (
    cart.find(function (item) {
      return item == product;
    })
  ) {
    updateQuantity("plus", id);
  } else {
    cart.push(product);
  }
  updateAll()
}

/////////  adding item from cart to html

let frame = document.querySelector(".frame");

function CreatCartHtml(arr) {
  let text = "";

  for (let i = 0; i < cart.length; i++) {
    text += `
    <div class="incart">
    <img src="${arr[i].img}" alt="${arr[i].tag}">
    <h1>${arr[i].tag}</h1>
    <div class="count-div" >
      <button onclick="updateQuantity( 'min' , ${arr[i].id} )"  ><</button>
      <h1 class="count" >${arr[i].inCart + 1}</h1>
      <button onclick="updateQuantity( 'plus' , ${arr[i].id} )" >></button>
      
    </div>
   <button id="remove" onclick="removeFromCart(${arr[i].id})"  > remove</button>

      
</div>
  
  
  `;
  }
  frame.innerHTML = text;
}

///////////////  change the quantity in cart
function updateQuantity(action, id) {
  cart.find(function (item) {
    if (item.id == id && action == "plus" && item.inCart < item.inWearHouse - 1) {
      item.inCart++;
    } else if (item.id == id && action == "min" && item.inCart > 0) {
      item.inCart--;
    }
  });
  updateAll()
}
 
//////////////////  remove item from cart

function removeFromCart(id){

 cart = cart.filter(function(item){

return item.id !== id 

})
updateAll()
}
function updateAll(){
  CreatCartHtml(cart)
updateSum()
localStorage.setItem("cart", JSON.stringify(cart));
}

//////////  item in cart + sum update 
let itemCount = document.getElementById("item-count")
let sum = document.getElementById("sum")

function updateSum() {
  let totalPrise = 0;
  let totalItem = 0;
  cart.forEach(function (item) {
    itemInCart2 = item.inCart+1
    totalPrise += item.price * itemInCart2;
    totalItem += itemInCart2;
  });

  sum.innerHTML = `  $${totalPrise.toFixed(2)} `;
  itemCount.innerHTML = totalItem;
}
updateAll()