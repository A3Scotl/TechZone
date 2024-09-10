let cart = [];

document.addEventListener("DOMContentLoaded", function () {
    let storedCart = localStorage.getItem("myCart");
    if (storedCart !== null) {
        cart = JSON.parse(storedCart);
        reloadCard();
    }
});
//load username len web va open close cart
document.addEventListener("DOMContentLoaded", function () {
    //load username len web 
    var currentUser = localStorage.getItem("currentUser");
    var usernameDisplay = document.querySelector(".username-display");
    var search_bar = document.querySelector(".search-bar");

    if (currentUser) {
        usernameDisplay.innerHTML = `<p>Hello, ${currentUser}</p> <span class="logout">Logout</span>`;
        search_bar.style.width = "40%";
        const logoutSpan = usernameDisplay.nextElementSibling;
    }

});
// open close cart
document.addEventListener("DOMContentLoaded", function () {
    var iconCart = document.querySelector('.icon-cart');
    var iconCartSpan = document.querySelector('.icon-cart span');
    var body = document.querySelector('body');
    var closeCart = document.querySelector('.close');
    iconCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    })
    closeCart.addEventListener('click', () => {
        body.classList.toggle('showCart');
    })


})

function addToCard(key) {
    if (cart[key] == null) {
        // copy product form list to list card
        cart[key] = JSON.parse(JSON.stringify(products[key]));
        cart[key].quantity = 1;
        localStorage.setItem("myCart", JSON.stringify(cart));
        alert("The product has been added to the cart");
    }
    else {
        alert("The product is already in the cart");
    }
    reloadCard();
}

let quantity = document.querySelector('span');
function reloadCard() {
    let count = 0;
    let totalPrice = 0;
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = "";
    cart.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count = count + value.quantity;
            var newItem = document.createElement('div');
            newItem.classList.add('item');
            // var imageSrc = location.href.includes('index.html') ? value.image[0].replace('../', './') : value.image[0];
            newItem.innerHTML =
                `
            <div class="image p-3">
                    <img src="${value.image[0]}">
                </div>
                <div class="name">
                ${value.name}
                </div>
                <div class="totalPrice">${value.price.toLocaleString()}₫</div>
                <div class="quantity">
                    <span class="down" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</span>
                    <span data-key="${key}">${value.quantity}</span>
                    <span class="up" onclick="changeQuantity(${key}, ${value.quantity + 1})" >+</span>
                </div>
            `;
            ;
            listCartHTML.appendChild(newItem);
            localStorage.setItem("totalAmount",JSON.stringify(totalPrice));
        }
    })
    let quantityCart = document.getElementById('quantityCart');
    quantityCart.innerText = count;

}
//thay đổi số lượng sản phẩm
function changeQuantity(key, quantity) {

    //nếu trong giỏ hàng sản phẩm có số lượng =0 thì xóa sản phẩm khỏi giỏ hàng
    if (quantity == 0) {
        delete cart[key];
    }
    //nếu trong giỏ hàng sản phẩm có số lượng  > 0 thì tiền = (số lượng * đơn giá)
    else {
        cart[key].quantity = quantity;
        cart[key].price = quantity * products[key].price;
    }
    localStorage.setItem('myCart', JSON.stringify(cart));
    reloadCard();
}
function checkOut(){
    if(cart.every(item => item === null)){
        alert("No products");
    }
    else{
    window.location.href = "../html/cart.html";
    }
    
}
