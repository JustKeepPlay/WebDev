function isValidIP(a){
    a=a.split('.');
    if(a.length!=4) return false;
    for(let i=0;i<a.length;i++){
        if(a[i]=='') return false;
        if(a[i]<0 || a[i]>255) return false;
        if(a[i].charAt(0)=='0' && a[i].length>1) return false;
    }
    return true;
}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));