let a = setTimeout(function(){
    alert("srijan")
},5000)
// a -> timerid
let b = prompt("Do you want to run the settimeout?")
if(b=="no"){
    clearTimeout(a)
}

console.log(a)

const sum = (a,b) => {
    console.log("sum running" + " " + (a+b))
    return a+b
}
// function sum(a,b){
//     console.log("sum running" + (a+b))
//     return a+b
// }
setTimeout(sum,2000,2,3)
// setTimeout(function,timer,parameter1,parameter2)