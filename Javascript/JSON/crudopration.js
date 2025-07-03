
let addproduct = document.querySelector('#addproduct-form')
let ImgUrl = document.querySelector('#img-url')
let title = document.querySelector('#title')
let description = document.querySelector('#description')
let price = document.querySelector('#price')
let showproduct = document.querySelector('#showproduct')

// add opration 

let product = JSON.parse(localStorage.getItem("products")) || []
addproduct.addEventListener('submit', (e) => {
  e.preventDefault();
  if ((ImgUrl.value == "" && title.value == "" && description.value == "" && price.value == "")) {
formvalidation()
    console.log("not run")
  } else {
    let item = {
      url: ImgUrl.value,
      title: title.value,
      description: description.value,
      price: price.value
    }
    product.push(item)
    localStorage.setItem("products", JSON.stringify(product))
    showproductpage()
    addproduct.reset()
  }


})


let formvalidation = () => {
  let url_err = document.querySelector('#url-err');
  let title_err = document.querySelector('#title-err');
  let description_err = document.querySelector('#description-err')
  let price_err = document.querySelector('#price-err')

  if (ImgUrl.value == "") {
    url_err.innerHTML = "Enter value";
  //   setTimeout(() => {
  //     url_err.innerHTML = "";

  //   }, 5000);
  }


  if (title.value == "") {
    title_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   title_err.innerHTML = "";

    // }, 5000);
  }

  if (description.value == "") {
    description_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   description_err.innerHTML = "";

    // }, 5000);
  }

  if (price.value == "") {
    price_err.innerHTML = "Enter value";
    // setTimeout(() => {
    //   price_err.innerHTML = "";

    // }, 5000);
  }
}



let showproductpage = () => {
 let data = ""
  product.forEach((element) => {
    let page = `
          <div class="col-4 mb-3">
          <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="..." height="200px">
          <div class="card-body">
            <h5 class="card-title text-center">${element.title}</h5>
            <p class="card-text">${element.description}</p>
           <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
          </div>
          `
          data += page
  });

  showproduct.innerHTML  = data

}

showproductpage()
