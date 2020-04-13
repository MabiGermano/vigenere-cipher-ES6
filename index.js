let A = 65;

let palavra = "raphael";
let key = "pessoa";

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

newKey = [];
for (i = 0; i < key.length;i++) {
    newKey = newKey.concat(key.toUpperCase().charCodeAt(i) - A + 1);
};
console.log(key);
arr = newKey.charAt(0);

console.log(String.fromCodePoint(arr));




 



// 80 69 83 83 79 65 80 = "PESSOA"
// 80 69 83 83 79 65 80
// 15 4 18 18 14 0 15 = resultado subtração