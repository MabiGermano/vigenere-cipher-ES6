class Encode{
    constructor(key, phrase){
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

    correctKeySize() {
        this._key = this._key.split(" ").join("");
        
        let newKey = this._phrase.split("").reduce((accumulator, letter)=>{
            return this._testRegex(letter) ? accumulator = accumulator.concat(letter) :
            accumulator = accumulator.concat(this._getNextKeyChar());
        },  String());
        this._key = newKey;
    }

    _getNextKeyChar(){
        let firstChar = this._key.substr(0,1);
        this._key = this._key.substr(1 - this._key.length).concat(firstChar); 
        return firstChar;
    }

    //FIXME: colocar esse método num helper
    _testRegex(letter){
        let regexp = new RegExp(/[^a-zA-Z0-9]|\s+/g);
        return regexp.test(letter);
    }
}
