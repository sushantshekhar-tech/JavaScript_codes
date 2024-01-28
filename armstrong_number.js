//coding wizard

//Write a program to check weather a number is an armstrong number or not
// 

// 153 = 1x1x1 + 5x5x5 + 3x3x3

let num = 370
let sum =0
let temp = num
while(temp>0){
    let remainder = temp%10
    sum += remainder*remainder*remainder
    temp=parseInt(temp/10)
}
if(sum==num){
    console.log(num,"is an armstrong numbr")
}
else{
    console.log(num,"is not an armstrong numbr")

}