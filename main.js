//farenhet to celsius covertor using functions

//checking for the click 
document.getElementById("button").addEventListener("click", calcConversion)

//global variable 
let resultSec = document.getElementById("resultDisplay")

function calcConversion () {
    //getting input 
    let f = Number(document.getElementById("fVal").value)

    //displaying results 
    resultSec.innerHTML = convert(f)
}

//function that convertrs farenheit to celsius using a value of a
function convert (a) {
    return (a-32) * 5/9
}