class EncodeController {
    constructor() {
        const REFERENCE_START = "A".charCodeAt(0) - 1;
        const REFERENCE_END = "Z".charCodeAt(0) + 1;

        let docSelect = document.querySelector.bind(document);
        this._inputSentence = docSelect("#sentence").toUpperCase();
        this._inputKey = docSelect("#key").toUpperCase();
    }

    //melhorar esse código
    encrypt() {
        event.preventDefault();
        let encode = new Encode(this._inputKey, this._inputSentence);
        encode.correctKeySize();

        var newSentence = String();
        for (i = 0; i < encode.key().length; i++) {
            let position = encode.key().charCodeAt(i) - REFERENCE_START;
            let charCode = encode.sentence().charCodeAt(i) + position;
            if (charCode > 90) {
                newSentence = REFERENCE_START + (charCode - REFERENCE_END);
            } else {
                newSentence = newSentence.concat();
            }
        };
        return newSentence;
    }
}