function highestDigit(n){
    if(n == 0){ return 0 }
    else{
        let r=n%10;
        let q=(n-r)/10;
        return Math.max(r,highestDigit(q));
    }
  }
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))