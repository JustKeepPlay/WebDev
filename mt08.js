function simplePair (a,num) {
    let s = new Array()
    a.forEach((i)=>{
        let n1 = a[i-1]
        a.forEach((j)=>{
            if(n1*a[j-1] == num){return s = [a[j-1],n1]
        }
    })
})
    if(s[0]==s[1]) s = null
    return s
}
console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));