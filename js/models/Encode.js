class Encode extends Cipher{
    constructor(key, phrase){
        super(key,phrase);

        this._REFERENCE_START = "A".charCodeAt(0) - 1;
        this._REFERENCE_END = "Z".charCodeAt(0) + 1;
        Object.freeze();
    }
}
