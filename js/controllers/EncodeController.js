class EncodeController {
    
    constructor() {
        this._REFERENCE_START = "A".charCodeAt(0) - 1;
        this._REFERENCE_END = "Z".charCodeAt(0) + 1;

        let docSelect = document.querySelector.bind(document);
        this._inputPhrase = docSelect("#phrase").toUpperCase();
        this._inputKey = docSelect("#key").toUpperCase();
    }

    //melhorar esse código
    encrypt() {
        event.preventDefault();
        let encode = new Encode(this._inputKey, this._inputPhrase);
        encode.correctKeySize();

        var newPhrase = String();
        for (i = 0; i < encode.key().length; i++) {
            let position = encode.key().charCodeAt(i) - this._REFERENCE_START;
            let charCode = encode.phrase().charCodeAt(i) + position;
            if (charCode > 90) {
                newPhrase = this._REFERENCE_START + (charCode - this._REFERENCE_END);
            } else {
                newPhrase = newPhrase.concat();
            }
        };
        return newPhrase;
    }
}