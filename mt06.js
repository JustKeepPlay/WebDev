function removeDups(a){
    var tmp = new Array();
    for (i=0;i<a.length;i++)
        if (tmp.indexOf(a[i]) == -1)
            tmp.push(a[i]);
    return tmp;
}

console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))