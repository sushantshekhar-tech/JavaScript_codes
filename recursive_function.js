//coding wizard
// Recursive Function
//




// const calling=()=>{
//     console.log("i am called")
//     // calling()
// }
// calling()



//factorial
// 3! = 1 x 2 x 3
// 5! = 1 x 2 x 3 x 4 x 5
// n! = 1 x 2 x 3 x 4 x.......x n

const fact = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
console.log("The factorial of the number is ", fact(5));

//
// 5 x fact(4)
// 5 x 4 x fact(3)
// 5 x 4 x 3 x fact(2)
// 5 x 4 x 3 x 2 x fact(1)
// 5 x 4 x 3 x 2 x 1
