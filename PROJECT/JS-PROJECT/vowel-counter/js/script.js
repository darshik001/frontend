
let word = document.getElementById('word-input');
let check = document.getElementById('check-btn');
let count = document.getElementById('total-word')
let refresh = document.getElementById('refresh-btn')
let alertmsg = document.getElementById('alretmsg')



check.addEventListener('click',()=>{
        let counter = 0
        let str = word.value;
        let arr = str.trim().split(/\s+/).join("").split("");

            arr.forEach(element => {
                 if("aeiouAEIOU".includes(element)){
                       counter ++;
                 }
                });

          count.innerHTML = counter;                 
})


refresh.addEventListener('click',()=>{
         word.value = ""
         count.innerHTML = 0
})













