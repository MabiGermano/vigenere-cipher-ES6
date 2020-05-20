class Encode{
    constructor(key, phrase){
        this._key = key;
        this._phrase = phrase;
        Object.freeze();
    }
    get key(){
        return this._key;
    }
    get phrase(){
        return this._phrase;
    }

    correctKeySize() {
        this._key = this._key.split(" ").join("");
        let newKey = this._phrase.split("").reduce((accumulator, letter)=>{
            return letter == " " ? accumulator = accumulator.concat(" ") : 
            accumulator = accumulator.concat(this._getNextKeyChar);
        }, new String());
        return newKey;
    }

    _getNextKeyChar(key){
        let firstChar = key.substr(0,1);
        this._key = key.substr(1 - key.length).concat(firstChar); 
        return firstChar;
    }
}