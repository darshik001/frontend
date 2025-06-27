
let addincome  = 0
let expensenamearr = []
   let str =""

console.log(expensenamearr)
document.getElementById('addincome').addEventListener('click',()=>{
    let income = document.getElementById("income").value
    addincome += Number(income);
   let totalincome = document.getElementById('totalincome').innerHTML = addincome
})

document.getElementById('addexpense').addEventListener('click',()=>{
     let expence =  document.getElementById('expense').value
     let expencename = document.getElementById('expensename').value
     addincome = addincome - expence;

        let totalincome = document.getElementById('totalincome').innerHTML = addincome

 expensenamearr.push({
         name : expencename,
         amt :  expence
      })
})



document.getElementById('show').addEventListener('click',()=>{
  str = "";
  let showex = document.getElementById('showexpense');
  func()
  showex.innerHTML = str
  console.log(str)
})

let func = ()=>{
         expensenamearr.forEach((ele)=>{
                   str += `<li class="d-flex justify-content-between align-items-center mb-2"><span><strong>${ele.name}</strong>: ₹${ele.amt}</span> <span>
                     <button class="btn btn-danger">edit</button>
                     <button class="btn btn-danger">delete</button>
                   </span>
                 
                   </li>`           
         })
        
}




