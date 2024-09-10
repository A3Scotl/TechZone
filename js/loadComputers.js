var products = [{
  "id": "CPT01",
  "name": "Laptop gaming MSI Katana 15 B13VEK 252VN",
  "image": ["../access/category/computers/CPT01.webp","../access/category/computers/CPT02.webp","../access/category/computers/CPT03.webp"],
  "price": 23000000,
  "description": ""
},
{
  "id": "CPT02",
  "name": "Laptop gaming MSI Katana 15 B13VFK 676VN",
  "image": ["../access/category/computers/CPT02.webp"],
  "price": 25000000,
  "description": ""
}
  ,
{
  "id": "CPT03",
  "name": "Laptop gaming MSI Thin 15 B13UC 2044VN",
  "image": ["../access/category/computers/CPT03.webp"],
  "price": 22000000,
  "description": ""
}
  ,
{
  "id": "CPT04",
  "name": "Laptop gaming MSI Thin 15 B13UC 1411VN",
  "image": ["../access/category/computers/CPT04.webp"],
  "price": 23000000,
  "description": ""
}
  ,
{
  "id": "CPT05",
  "name": "Laptop gaming MSI Stealth 18 Mercedes AMG",
  "image": ["../access/category/computers/CPT05.webp"],
  "price": 22005000,
  "description": ""
}
  ,
{
  "id": "CPT06",
  "name": "Laptop gaming MSI Stealth 16 Mercedes AMG A1VGG 293VN",
  "image": ["../access/category/computers/CPT06.webp"],
  "price": 23800000,
  "description": ""
}
  ,
{
  "id": "CPT07",
  "name": "Laptop gaming MSI Thin 15 B12UCX 1419VN",
  "image": ["../access/category/computers/CPT07.webp"],
  "price": 19000000,
  "description": ""
}
  ,
{
  "id": "CPT08",
  "name": "Laptop gaming MSI Cyborg 14 A13VE 090VN",
  "image": ["../access/category/computers/CPT08.webp"],
  "price": 23000000,
  "description": ""
}
  ,
{
  "id": "CPT09",
  "name": "Laptop Gaming MSI Stealth 18 AI Studio A1VHG",
  "image": ["../access/category/computers/CPT09.webp"],
  "price": 22000000,
  "description": ""
}
  ,
{
  "id": "CPT10",
  "name": "Laptop gaming MSI Katana A15  ( 20th Edition)",
  "image": ["../access/category/computers/CPT10.webp"],
  "price": 25000000,
  "description": ""
}
  ,
{
  "id": "CPT11",
  "name": "Laptop gaming MSI 18 A1VGG 008VN (20th)",
  "image": ["../access/category/computers/CPT11.webp"],
  "price": 33000000,
  "description": ""
}
  ,
{
  "id": "CPT12",
  "name": "Laptop gaming MSI Pulse 17 AI C1VGKG 017VN",
  "image": ["../access/category/computers/CPT12.webp"],
  "price": 18000000,
  "description": ""
}
  ,
{
  "id": "CPT13",
  "name": "Laptop gaming MSI Pulse 17 AI C1VGKG 018VN",
  "image": ["../access/category/computers/CPT13.webp"],
  "price": 19000000,
  "description": ""
}
  ,
{
  "id": "CPT14",
  "name": "Laptop gaming MSI Pulse 17 AI C1VGKG 017VN",
  "image": ["../access/category/computers/CPT14.webp"],
  "price": 19500000,
  "description": ""
}
  ,
{
  "id": "CPT15",
  "name": "Laptop gaming MSI Pulse 17 AI C1VGKG 012VN",
  "image": ["../access/category/computers/CPT15.webp"],
  "price": 25000000,
  "description": ""
}
]
// Load product list page
document.addEventListener("DOMContentLoaded", function () {
  var listProductHTML = document.querySelector('.list-product');
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML =
      `<img src="${value.image[0]}" alt="" id="imgPD">
      <h2>${value.name}</h2>
      <div class="price">${value.price.toLocaleString()}₫</div>
      <button class="detail" onclick="showDetail(${key})">Details</button>
      <button class="addCart" onclick="addToCart(products[${key}])">Add To Cart</button>`
      listProductHTML.appendChild(newDiv);
  });
})
//chuyển sang trang chi tiết sản phẩm
function showDetail(key){
  cart = products[key];
  localStorage.setItem("detail",JSON.stringify(cart));
  window.location.href = "../html/detail.html";
 
}