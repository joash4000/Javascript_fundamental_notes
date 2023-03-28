let a = setTimeout(function(){
    alert("srijan")
},5000)
// a -> timerid
let b = prompt("Do you want to run the settimeout?")
if(b=="no"){
    clearTimeout(a)
}

console.log(a)

