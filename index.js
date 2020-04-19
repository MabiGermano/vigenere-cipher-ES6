let A = 65;

let palavra = "raphael";
let key = "pessoa";
key = key.toUpperCase();
palavra = palavra.toUpperCase();

//TRATANDO O TAMANHO DA VARIAVEL KEY PARA
    if (palavra.length > key.length) {
        let count = 0;
        while (palavra.length > key.length) {
            key = key.concat(key.charAt(count));
            count++;
           // console.log(key.toUpperCase());
        }
    };

    if (palavra.length < key.length) {
        key = key.substr(0, palavra.length)
        console.log(key.toUpperCase());
    };

let newKey = [];
var newSentence = String();
for (i = 0; i < key.length;i++) {
    let position = (key.charCodeAt(i) - A);
    let charCode = palavra.charCodeAt(i) + position;
    if(charCode > 90){
        console.log("-------------------")
        console.log(key.charAt(i));
        console.log(key.charCodeAt(i));
        console.log(charCode);
        console.log(charCode - 90);
        console.log(A + (charCode - 90));
    }
    newSentence = newSentence.concat();
};

console.log(newSentence);




 



// 80 69 83 83 79 65 80 = "PESSOA"
// 80 69 83 83 79 65 80
// 15 4 18 18 14 0 15 = resultado subtração