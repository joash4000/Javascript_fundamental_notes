// setInterval(function(){
//     alert("setinterval")
// },3000)

const sum = (a,b) => {
    alert("sum running" + " " + (a+b))
    return a+b
}

setInterval(sum,2000,4,5)