// for ,while,do while loop   =>for in, for of

// syntex 
// for loop 

// for(Infinity;condition;expretion){
// statment   
// }


// while loop 

// init 
// while(contion)  {
// stetment 
// expretion            
//  }


// do while loop 

// init 
// do {
// stetment 
// expretion            
//  }
// while(contion);    
// program 

// 1. Print out 10 to 1
//  for(let i =10;i>=1;i--){
//    console.log(i);
//  }


// 2.Print out 51 to 99  

// let i = 51;

// while(i<=99){
//   console.log(i); 
//   i++;
// }


// 3.Enter n  and print out 1 to n

// let i = 1,n;
//  n = Number(prompt("Enter value of n"));

//  do{
//     console.log(i);
//     i++
//  } while(i<=n);



// 4. Enter n and print out n to 1

// let n = Number(prompt("Enter value of n"));

// for(n ;n>=1;n--){
//   console.log(n);
// }


// 5. Enter n and print out -n to n

//  let i,n;
//  n = Number(prompt("Enter value of n"));
// i = n-n-n;

// while(i<=n){
//   console.log(i);
//   i++;
// }



// 6. Enter n and print out odd no. up to n

// let i = 1,n;
// n = Number(prompt("Enter value of n"));

// do{
//   console.log(i);
//   i+=2;
// }while(i<=n);


// 7.Enter n and print out even no. up to n


// let n = Number(prompt("Enter value of n"));
// for(let i = 2;i<=n;i+=2){
//   console.log(i);
// }




// 8.Print out series 1,4,9,16,.....,n

// let i = 1, n;
// n = Number(prompt("Enter value of n"));
// while (i <= n) {
//   console.log(i * i);
//   i++;
// }


// 9.Print out series 1,4,3,16,5,...,n
   
// let i = 1, n;
// n = Number(prompt("Enter value of n"));
// do{
//   if(i%2==0){
//     console.log(i*i);
//   } else{
//     console.log(i);
//   }
//   i++;
// } while(i<=n);


// 10.Print out series 1,2,4,8,16,...,n
//  let n=10;
//  let y = 1
//    for(let i=1;i<=n;i++){

//        console.log(y);
//        y = y+y;
//    }


// 11.Print out series 1,4,12,32,80,...,n

// let i =2,y=1,x=1,n;
// n = Number(prompt("Enter value of n"));

// while(i<=n){
//   console.log(y);
//      x = x+x;
//      y = i*x;
//      i++;
// }


// 11.Find the sum of numbers from 1 to 100

//     let i =0,sum=0;
//     do{
//        sum+=i
//        i++;
//     }  while(i<=100);
//  console.log("Sum of 1 to 100:",sum)


// 12.Find the factorial of a given number.
//    let fact = 1;
//    let n = 5;
   
//  for(let i = n;i>=1;i--){
//      fact= fact*i;
//  }
//  console.log(fact)


// 12.Program to Print Fibonacci Series up to n

  
  // let i = 1,x=0,y=1,z,n=10;
  //  while(i<=n){
  //   console.log(x)
  //         z = y;
  //         y=x;
  //         x = y+z;
  //         i++;
  //  }


