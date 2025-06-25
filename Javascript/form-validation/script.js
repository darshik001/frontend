
 document.querySelector('form').addEventListener('submit',(event)=>{
 event.preventDefault()
let fname = document.getElementById('fname')
let sname = document.getElementById('sname')
let surname = document.getElementById('surname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let password = document.getElementById('password')
let repassword = document.getElementById('repassword')

   namecheck(fname,sname,surname)
  
 })



 let namecheck = (fname,sname,surname)=>{
  if(fname.value == ""){
  fname.classList.add('is-invalid');
    document.getElementById('fnameerr').innerText = 'Please enter first name';
  } else{
  fname.classList.add('is-valid');

  }
  if(sname.value == ""){
    console.log('enter value')
  }
  if(surname.value == ""){
    console.log('enter value')
  }
 }


