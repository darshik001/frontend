
let addincome = 0
let expensenamearr = []
let str = ""


document.getElementById('addincome').addEventListener('click', () => {
      let income = document.getElementById("income")
      addincome += Number(income.value);
      document.getElementById('totalincome').innerHTML = addincome
      income.value = ""
})

document.getElementById('addexpense').addEventListener('click', () => {
      let expence = document.getElementById('expense')
      let expencename = document.getElementById('expensename')

    if(expence.value == "" || expencename.value ==""){

      alert("enter value")

    } else{
      if(expence.value >= addincome){
      alert("Your Income Gretor Your Balense")
      } else{
      addincome = addincome - expence.value;
      document.getElementById('totalincome').innerHTML = addincome
      expensenamearr.push({
      name: expencename.value,
      amt: expence.value
})
      func()
      }
      expencename.value = "";
      expence.value = "";
    }
})

let func = () => {
      let showex = document.getElementById('showexpense');
      str = ""
   
      if(expensenamearr.length == 0){

      showex.innerHTML = ""

      } else{
    
      expensenamearr.forEach((ele,index) => {
      str += ` <li class="d-flex justify-content-between align-items-center mb-2 fs-4">
      <span>${ele.name} : ₹${ele.amt}</span> 
      <span>
      <i class="bi bi-pencil-square text-warning fs-4" data-action="edit" data-index="${index}"></i>
      <i class="bi bi-trash-fill text-danger fs-4 ms-2" data-action="delete" data-index="${index}"></i>
      </span>
      </li> `
      showex.innerHTML = str;
   })
      }
}

//chat gpt code
document.getElementById('showexpense').addEventListener('click', (e) => {
  let action = e.target.getAttribute('data-action');
  let index = e.target.getAttribute('data-index');

  if (action === 'edit') {
    const item = expensenamearr[index];
    document.getElementById('expensename').value = item.name;
    document.getElementById('expense').value = item.amt;
    addincome += Number(item.amt);
    document.getElementById('totalincome').innerHTML = addincome;
    expensenamearr.splice(index, 1);
    
   func();

  } else if (action === 'delete') {
    console.log(expensenamearr[index].amt)
    addincome += Number(expensenamearr[index].amt);
    document.getElementById('totalincome').innerHTML = addincome;
    expensenamearr.splice(index, 1);
    func();
  }
});






