
let addProductForm = document.querySelector('#addProductForm')
let productName = document.querySelector('#productName')
let productCategory = document.querySelector('#productCategory')
let productImage = document.querySelector('#productImage')
let productPrice = document.querySelector('#productPrice')
let productDescription = document.querySelector('#productDescription')
let productsContainer = document.querySelector('#productsContainer')
let cartcontainer = document.querySelector("#cartcontainer")
let cartcount  = document.querySelector(".cart-count")
// add product
addProductForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  let products = JSON.parse(localStorage.getItem('products')) || [];
  let product = {
    id:generateUniqueID(),
    name:productName.value,
    Category:productCategory.value,
    Image:productImage.value,
    Price:productPrice.value,
    Description:productDescription.value
  }
  
  products.push(product)
  localStorage.setItem('products',JSON.stringify(products))
  addProductForm.reset()
  viewProducts()
})


// UniqId-Genretor 
let generateUniqueID = ()=>{
  return Date.now() + Math.floor(Math.random()*100000);

}


let viewProducts  =()=>{
  let products = JSON.parse(localStorage.getItem('products')) || [];
  
let data = ''
     products.forEach((product,index) => {
          let obj = `<div class="col-6 col-md-4 col-lg-3">
          <div class="card product-card h-100">
              <img src="${product.Image}" class="card-img-top product-img" height="250" alt="${product.name}">
              <div class="card-body">
                <h4 class="card-title text-center  product-title">${product.name}</h4>
                <p class="product-category mb-2"><strong>Category:</strong> ${product.Category}</p>
                <p class="card-text product-Description overflow-y-scroll">${product.Description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="product-price mb-0">₹ ${product.Price}</p>
                  <button class="btn btn-primary btn-sm add-to-cart" onclick="addtocart(${index})" >
                    <i class="bi bi-cart-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>`
            data += obj
     });
     productsContainer.innerHTML = data
}
viewProducts()


// let cartindex = 0
let addtocart = (id)=>{
  let products = JSON.parse(localStorage.getItem('products'));
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts")) || []
  // console.log(products)
  let exist = false
  cartproducts.forEach((product)=>{
      if (product.id === products[id].id) {
        exist = true
        // cartindex++
      }
  })


   if(exist === false){
    cartproducts.push(products[id])
    localStorage.setItem("cartproducts",JSON.stringify(cartproducts))
    cartproductcount()
    viewcartproducts()
  }
  
  
}

let cartproductcount = ()=>{
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"))
     cartcount.innerHTML = cartproducts.length
}

cartproductcount()


 let viewcartproducts = ()=>{
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts")) || []
let data = "";
cartproducts.forEach((element,index)=>{
     let row = `
         <div class="card flex-row p-2 mb-2" style="width: 100%;">
         <div style="width:300px">
         <img src="${element.Image}" class="cart-img rounded-2" alt="...">
         </div>
  <div class="card-body px-5 my-auto">
    <h3 class="card-title text-center">${element.name}</h3>
    <p class="card-text">${element.Description}</p>
    <div class="d-flex justify-content-between mt-2">
      <div class="">
      <button class="btn btn-outline-primary me-2">-</button>
      <span class="fw-bold">1</span>
      <button class="btn btn-outline-primary ms-2">+</button>
    </div>
    <div>
      <h3>₹ ${element.Price}</h3>  
    </div>
    </div>
    <a href="#" class="btn btn-primary mt-4" onclick="removeaddtocart(${index})" >Remove</a>
  </div>
</div>
     `
     data += row
  
})
  cartcontainer.innerHTML = data
 } 

 viewcartproducts()


 let removeaddtocart  = (id)=>{
  let cartproducts = JSON.parse(localStorage.getItem("cartproducts"))
    cartproducts.splice(id,1)
    localStorage.setItem("cartproducts",JSON.stringify(cartproducts))
    cartproductcount()
    viewcartproducts()
     
 }