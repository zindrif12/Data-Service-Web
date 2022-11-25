
            var data = JSON.parse(localStorage.getItem("dummy"));

            for (var i = 0; i < data.length; i++) {
              var div = document.createElement("div");
              div.classList.add("price");

              console.log(data[i].name);
              console.log(data[i].price);
              console.log(data[i].dataSize);
              console.log(data[i].description);

              div.innerHTML = `
      <div class="pricing-plan">
        <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
        <h2 class="pricing-header">${data[i].name}</h2>
        <ul class="pricing-features">
          <li class="pricing-features-item">${data[i].description}</li>
          <li class="pricing-features-item" style="color:red; font-size: 3.0rem">${data[i].dataSize} GB Data</li>
        </ul>
        <span class="pricing-price">$ ${data[i].price}</span>
        <a href="./enquiry.html" class="pricing-button" onclick="localStorage.setItem('selectedProduct',JSON.stringify(data[${i}]));">Buy Now</a>

       
      </div>

      </div>
        `;
              document.querySelector(".pricing-table").appendChild(div);
            }