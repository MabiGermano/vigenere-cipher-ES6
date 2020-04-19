class Encode{
    constructor(key, sentence){
        this._key = key;
        this._sentence = sentence;
        Object.freeze();
    }
    get key(){
        return this._key;
    }
    get sentence(){
        return this._sentence;
    }

    correctKeySize() {
        this._key = this._key.split(" ").join("");
        let newKey = sentence.split("").reduce((accumulator, letter)=>{
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