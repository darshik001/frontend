
let word = document.getElementById('word-input');
let check = document.getElementById('check-btn');
let count = document.getElementById('total-word')
let refresh = document.getElementById('refresh-btn')
let alertmsg = document.getElementById('alretmsg')

check.addEventListener('click',()=>{
          let str = word.value.trim();
          if(str == ""){
              let myModal = new bootstrap.Modal(document.getElementById('alretmsg'));
          myModal.show(); 

          }else{
            let arr = str.trim().split(/\s+/).join(" ").split(" ");
            count.innerHTML = arr.length
          }
})


refresh.addEventListener('click',()=>{
     word.value = ""
     count.innerHTML = 0
})











