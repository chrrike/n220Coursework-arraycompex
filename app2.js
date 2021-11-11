let strInput = document.querySelector("#strInput");
let badwordCount = 0;

function badwordFinder(){
    //split string on spaces
    let brokenStr = strInput.value.split(" ");
    //loop through array
    for(let x = 0; x<brokenStr.length; x++){
        let testedWord = brokenStr[x];
        //check for each 
        if(testedWord == "Clear" || testedWord == "clear"){
            badwordCount++;
        }else if(testedWord == "water" || testedWord == "Water"){
            badwordCount++
        }else if(testedWord == "tires" || testedWord == "Tires"){
            badwordCount++;
        }
    }
    dvOutput.innerHTML = "There were " + badwordCount + " bad words.";
    //reset counter to 0
    badwordCount = 0;
}