var products = [{
  "id": "ACC01",
  "name": "Cổng chuyển đổi USB C Ugreen 4 in 1 CM219 70336",
  "image": "../access/category/accessories/ACC01.webp",
  "price": 300000,
  "description": ""

}, {
  "id": "ACC02",
  "name": "Cổng chuyển đổi USB C Ugreen 5 in 1 CM478 15495",
  "image": "../access/category/accessories/ACC02.webp",
  "price": 320000,
  "description": ""
}
  , {
  "id": "ACC03",
  "name": "Cổng chuyển đổi USB C Ugreen 4 in 1 CM219 50985",
  "image": "../access/category/accessories/ACC03.webp",
  "price": 300000,
  "description": ""
}
  , {
  "id": "ACC04",
  "name": "Cổng chuyển đổi USB C Ugreen 5 in 1 CM511 15596",
  "image": "../access/category/accessories/ACC04.webp",
  "price": 530000,
  "description": ""
}
  , {
  "id": "ACC05",
  "name": "Công chuyển đổi Ugreen USB 2.0 to LAN RJ45 CR110 20254",
  "image": "../access/category/accessories/ACC05.webp",
  "price": 190000,
  "description": ""
}
  , {
  "id": "ACC06",
  "name": "Cổng chuyển đổi Ugreen USB 3.0 to LAN RJ145 CR111 20256",
  "image": "../access/category/accessories/ACC06.webp",
  "price": 290000,
  "description": ""
}
  , {
  "id": "ACC07",
  "name": "Cổng chuyển đổi USB C Ugreen 10 in 1 CM498 15601",
  "image": "../access/category/accessories/ACC07.webp",
  "price": 1900000,
  "description": ""
}
  , {
  "id": "ACC08",
  "name": "Cổng chuyển đổi USB C Ugreen 7 in 1 CM512 90568",
  "image": "../access/category/accessories/ACC08.webp",
  "price": 890000,
  "description": ""
}
  , {
  "id": "ACC09",
  "name": "Cổng chuyển đổi USB C Ugreen 5 in 1 CM136 50209",
  "image": "../access/category/accessories/ACC09.webp",
  "price": 690000,
  "description": ""
}
]
// Load product list page
document.addEventListener("DOMContentLoaded", function () {

  var listProductHTML = document.querySelector('.list-product');
  var cart = {};
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML =
      `<img src="${value.image}" alt="" id="imgPD">
      <h2>${value.name}</h2>
      <div class="price">${value.price.toLocaleString()}₫</div>
      <button class="detail" onclick="showDetail(${key})">Details</button>
      <button class="addCart" onclick="addToCard(${key})">Add To Cart</button>`
    listProductHTML.appendChild(newDiv);
  });

 
})
//chuyển sang trang chi tiết sản phẩm
function showDetail(key){
  cart = products[key];
  localStorage.setItem("detail",JSON.stringify(cart));
  window.location.href = "../html/detail.html";
 
}
 