//Referênias feitas dessa forma para ter as letras A e Z inclusive.
const REFERENCE_START = "A".charCodeAt(0) - 1;
const REFERENCE_END = "Z".charCodeAt(0) + 1;

let palavra = "raphael";
let key = "pessoa";
key = key.toUpperCase();
palavra = palavra.toUpperCase();

//TRATANDO O TAMANHO DA VARIAVEL KEY PARA


if (palavra.length < key.length) {
    key = key.substr(0, palavra.length)
    console.log(key.toUpperCase());
};

let newKey = [];
var newSentence = String();
for (i = 0; i < key.length; i++) {
    let position = key.charCodeAt(i) - REFERENCE_START;
    let charCode = palavra.charCodeAt(i) + position;
    if (charCode > 90) {
        REFERENCE_START + (charCode - REFERENCE_END);
    }
    newSentence = newSentence.concat();
};


console.log(newSentence);
correctKeySize(key,palavra);
function correctKeySize(key, sentence) {
    key = key.split(" ").join();
    let newKey = sentence.split("").reduce((accumulator, letter, index)=>{
        index = key.length - 1 < index ? 0 : index
        accumulator = (letter == " " ? accumulator.concat(" ") : 
        accumulator.concat(key.charAt(index)));
        return accumulator;
    }, "");
    return newKey;
}








// 80 69 83 83 79 65 80 = "PESSOA"
// 80 69 83 83 79 65 80
// 15 4 18 18 14 0 15 = resultado subtração