//Referênias feitas dessa forma para ter as letras A e Z inclusive.
const REFERENCE_START = "A".charCodeAt(0) - 1;
const REFERENCE_END = "Z".charCodeAt(0) + 1;

let sentence = "raphael";
let key = "pessoa";
key = key.toUpperCase();
sentence = sentence.toUpperCase();


let newKey = [];
var newSentence = String();
for (i = 0; i < key.length; i++) {
    let position = key.charCodeAt(i) - REFERENCE_START;
    let charCode = sentence.charCodeAt(i) + position;
    if (charCode > 90) {
        REFERENCE_START + (charCode - REFERENCE_END);
    }
    newSentence = newSentence.concat();
};


console.log(newSentence);
console.log(correctKeySize("incendio" , "fogo no parquinho"));

function correctKeySize(key, sentence) {
    key = key.split(" ").join("");
    let newKey = sentence.split("").reduce((accumulator, letter)=>{
        if(letter == " "){
            accumulator = accumulator.concat(" ");
        }else{
            let nextChar = key.substr(0,1);
            key = manipulateKey(key);
            accumulator = accumulator.concat(nextChar);
        }
        return accumulator
    }, new String());
    return newKey;
}

function manipulateKey(key){
    let firstChar = key.substr(0,1);
    return key.substr(1 - key.length).concat(firstChar);
}


// 80 69 83 83 79 65 80 = "PESSOA"
// 80 69 83 83 79 65 80
// 15 4 18 18 14 0 15 = resultado subtração