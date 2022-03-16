function criticalCode(){
    throw "throwing an error";
}
function logError(message){
    console.log(message);
}
//try catch
console.log("\n****************Try catch****************\n");

try {
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//throw in try catch
console.log("\n****************Throwing in try catch****************\n");

try {
    throw "An exception that throw in everytime";
}catch(ex){
    console.log("Got an error");
    logError(ex);
}

//try catch finally
console.log("\n****************Try catch finally****************\n");

try{
    criticalCode();
}catch(ex){
    console.log("Got an error");
    logError(ex);
}finally{
    console.log("code that always runs");
}
function hello(){
    console.log("\n****************Throing Exception****************\n");
}