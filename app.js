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
    document.body.classList.add("stop-scrolling")
  
  });
  closeCart.addEventListener("click", function () {
    htmlCart.classList.remove("toggle");
    document.body.classList.remove("stop-scrolling")
  
  });
  
  //////////////// mune toggle
  
  let cartToggle2 = document.querySelector("#cartToggle2");
  cartToggle2.addEventListener("click", function () {
    htmlCart.classList.toggle("toggle");
  });
  
  let togleMenu = document.getElementById("togleMenu");
  let menu = document.querySelector(".menu");
  
  togleMenu.addEventListener("click", function () {
    menu.classList.toggle("toggle");
   document.body.classList.toggle("stop-scrolling")
  
  });
  
  function toggleRemove() {
    menu.classList.remove("toggle");
  }


function darkMode() {
    let darkBtn = document.querySelector("#switch").checked;
  
    if (!darkBtn) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }
  darkMode();
  