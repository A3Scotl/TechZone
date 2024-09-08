document.addEventListener("DOMContentLoaded", function () {
        var sp = JSON.parse(localStorage.getItem("detail"));
        let newItem = document.createElement('div');
        newItem.classList.add('item');
      
        if (sp.image.length > 1) {
          // Hiển thị carousel nếu có nhiều hơn 1 hình ảnh
          newItem.innerHTML = `
            <div id="carouselExampleControls" class="carousel slide overflow-hidden" data-bs-ride="carousel">
              <div class="carousel-inner ">
                ${sp.image.map((img, index) => {
                  return `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                      <img src="${img}" class="d-block w-100" alt="...">
                    </div>
                  `;
                }).join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          `;
        } else {
          // Hiển thị hình ảnh nếu chỉ có 1 hình ảnh
          newItem.innerHTML = `
            <img src="${sp.image[0]}" class="d-block w-100" alt="...">
          `;
        }
      
        document.querySelector(".ctn_product_img").appendChild(newItem)
        document.querySelector(".ctn_product_detail_name").innerHTML = `${sp.name}`;
        document.querySelector(".ctn_product_detail_price").innerHTML = `${sp.price.toLocaleString()}₫`;
      })