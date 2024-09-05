document.addEventListener("DOMContentLoaded", function(){
    var currentUser = localStorage.getItem("currentUser");
    var usernameDisplay = document.querySelector(".username-display");
    var search_bar = document.querySelector(".search-bar");
    
    if (currentUser) {
        usernameDisplay.innerHTML = `<p>Hello, ${currentUser}</p> <span class="logout">Logout</span>`;
        search_bar.style.width = "40%";
        const logoutSpan = usernameDisplay.nextElementSibling;          
    }
    
    });
    document.addEventListener("DOMContentLoaded",function(){
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