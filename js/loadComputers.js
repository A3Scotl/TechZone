// Load product list page
fetch('../data/computers.json')
  .then(response => response.json())
  .then(data => {
    var products = data;
    var listProductHTML = document.querySelector('.list-product');
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
      console.log(newDiv);
    });
  })
  .catch(error => console.error('Error:', error));