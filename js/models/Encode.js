class Cipher {
    constructor(key, phrase){
        this._REFERENCE_START = "A".charCodeAt(0) - 1;
        this._REFERENCE_END = "Z".charCodeAt(0) + 1;

        this._key = key.toUpperCase();
        this._phrase = phrase.toUpperCase();
        Object.freeze();
    }
    get key(){
        return this._key;
    }
    get phrase(){
        return this._phrase;
    }

    get referenceStart() {
        return this._REFERENCE_START;
    }

    get referenceEnd() {
        return this._REFERENCE_END;
    }

    correctKeySize() {
        this._key = this._key.split(" ").join("");
        
        let newKey = this._phrase.split("").reduce((accumulator, letter)=>{
            return DataProcessingHelper.testRegex(letter) ? accumulator = accumulator.concat(letter) :
            accumulator = accumulator.concat(this._getNextKeyChar());
        },  String());
        this._key = newKey;
    }

    _getNextKeyChar(){
        let firstChar = this._key.substr(0,1);
        this._key = this._key.substr(1 - this._key.length).concat(firstChar); 
        return firstChar;
    }
}
