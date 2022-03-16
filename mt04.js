function totalVolume(...num){
    var mul = 1;
    var total = 0;
    for(var i = 0; i < num.length; i++){
        for(var j = 0; j < 3; j++){
            mul *= num[i][j];
        }
        total += mul
        if(j == 3){mul = 1}
    }
    return total
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalVolume([2,2,2],[2,1,1]))
console.log(totalVolume([1,1,1]));
