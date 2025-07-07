
let addProductForm = document.querySelector('#addProductForm')
let productName = document.querySelector('#productName')
let productCategory = document.querySelector('#productCategory')
let productImage = document.querySelector('#productImage')
let productPrice = document.querySelector('#productPrice')
let productDescription = document.querySelector('#productDescription')
let productsContainer = document.querySelector('#productsContainer')


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
  console.log(products)
let data = ''
     products.forEach((product) => {
          let obj = `<div class="col-6 col-md-4 col-lg-3">
          <div class="card product-card h-100">
              <img src="${product.Image}" class="card-img-top product-img" height="250" alt="${product.name}">
              <div class="card-body">
                <h4 class="card-title text-center  product-title">${product.name}</h4>
                <p class="product-category mb-2"><strong>Category:</strong> ${product.Category}</p>
                <p class="card-text product-Description text-center overflow-y-scroll">${product.Description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="product-price mb-0">$${product.Price}</p>
                  <button class="btn btn-primary btn-sm add-to-cart">
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

