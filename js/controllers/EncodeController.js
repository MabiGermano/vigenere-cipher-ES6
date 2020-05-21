class EncodeController {
    
    constructor() {
        this._REFERENCE_START = "A".charCodeAt(0) - 1;
        this._REFERENCE_END = "Z".charCodeAt(0) + 1;

        let docSelect = document.querySelector.bind(document);
        this._inputPhrase = docSelect("#phrase");
        this._inputKey = docSelect("#key");
        this._inputType = docSelect("#type");
        this._message = new Message();
        this._componentMessage = new CodedMessageView(docSelect('#resultField'));
    }

    cryptography(event){
        console.log(this);
        event.preventDefault();
        this._message.message = this._encrypt();
        this._componentMessage.update(this._message);
        this._cleanForm();
    }

    //FIXME: melhorar esse código
    _encrypt() {
        event.preventDefault();
        let encode = new Encode(this._inputKey.value, this._inputPhrase.value);
        encode.correctKeySize();
        console.log(encode);
        let newPhrase = String();

        let regexp = new RegExp(/[^a-zA-Z0-9]+/g);
        for (let i = 0; i < encode.key.length; i++) {
            if(regexp.test(encode.phrase.charAt(i))){
                newPhrase = newPhrase.concat(encode.phrase.charAt(i));
            }else{
                let position = encode.key.charCodeAt(i) - this._REFERENCE_START;
                let charCode = String(encode.phrase.charCodeAt(i) + position);
                if (charCode > 90) {
                    newPhrase = newPhrase.concat(String.fromCharCode(this._REFERENCE_START + (charCode - this._REFERENCE_END)));
                } else {
                    newPhrase = newPhrase.concat(String.fromCharCode(charCode));
                }
            }
        };
        return newPhrase;
    }

    _cleanForm(){
        this._inputPhrase.value = "";
        this._inputKey.value = "";
        this._inputType.value = "encode";

        this._inputPhrase.focus();


    }
}