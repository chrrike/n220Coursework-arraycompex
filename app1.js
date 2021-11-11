let numInput = document.querySelector("#numInput");

function average(){
    //make a string to hold the value of the input
    let numStr = numInput.value;
    //turn string input into an array of strings, using .split(",") to make each num a string
    let numBrokenStr = numStr.split(",");

    //make array to hold the actual int
    let numArray = [];

    //while i is less than the length of the broken up string
    for(let i = 0; i<numBrokenStr.length; i++){
        //push the value at location i as an integer on the numArray
        numArray.push(parseInt(numBrokenStr[i]));
    }
    
    let total = 0;

    for(let x = 0; x<numArray.length; x++){
        total = total + numArray[x];
    }

    let average = total/numArray.length;

    dvOutput.innerHTML = "The sum of the numbers is " + total + ". The average of the numbers is " + average;


}