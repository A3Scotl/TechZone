var products = [{
    "id": " N01",
    "name": "Experience buying laptops for students that you should not ignore",
    "image": "../access/category/news/7.webp",
    "author": "Nguyen Truong An"
},
{
    "id": " N02",
    "name": "What is Padlet? How to download and instructions for using the software",
    "image": "../access/category/news/1.jpg",
    "author": "Nguyen Hanh Ha"
}
    ,
{
    "id": " N03",
    "name": "What is Snap Tap? Why Why Why is Snap Tap so popular among gamers?",
    "image": "../access/category/news/2.webp",
    "author": "Tran Van Cao"
}
    ,
{
    "id": " N04",
    "name": "Guide to choosing a super standard laptop for students in 2024",
    "image": "../access/category/news/3.webp",
    "author": "David"
}
    ,
{
    "id": " N05",
    "name": "5 ways to watch YouTube without ads that not everyone knows",
    "image": "../access/category/news/4.webp",
    "author": "Haley"
}
    ,
{
    "id": " N06",
    "name": "Top 4 simple and effective ways to download movies to your computer",
    "image": "../access/category/news/5.webp",
    "author": "Lee Min Ho"
}
    ,
{
    "id": " N07",
    "name": "Skilled hackers often try to fix Apple's most painful problems...",
    "image": "../access/category/news/6.webp",
    "author": "Song Hong He"
}
    ,
{
    "id": " N08",
    "name": "Impressive performance of Intel Core Ultra 9 185H “Meteor Lake” 5.1GHz revealed",
    "image": "../access/category/news/8.webp",
    "author": "Le Van Quy"
}
]
// Load product list page
document.addEventListener("DOMContentLoaded", function () {

    var listProductHTML = document.querySelector('.news-cards');
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =
            ` <div class="card" style="width: 18rem;" id="">
        <img src="${value.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value.name}</h5>
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sequi . Similique!

            </p>
          <button class="btn btn-primary" onclick="showDetail(${key})">Show more</button>
        </div>
      </div>`
        listProductHTML.appendChild(newDiv);
    });
})
//chuyển sang trang chi tiết sản phẩm
function showDetail(key) {
    cart = products[key];
    localStorage.setItem("detail-news", JSON.stringify(cart));
    window.location.href = "../html/detail-news.html";

}
