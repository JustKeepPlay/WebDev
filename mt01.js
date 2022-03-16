function numberSplit(num){
    let bruh = num/2
    let arr=Array
    if(num%2==0){arr=[bruh,bruh]}
    else{arr=[Math.floor(bruh),Math.floor(bruh)+1]}
    return arr
}
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))