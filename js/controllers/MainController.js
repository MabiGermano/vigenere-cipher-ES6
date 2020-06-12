class MainController {
    
    constructor() {
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

        this._message.message = this._inputType.value == 'encode' ? this._encrypt() : this._decrypt();
        this._componentMessage.update(this._message);
        
    }

    //FIXME: melhorar esse código
    _encrypt() {
        event.preventDefault();
        let encode = new Encode(this._inputKey.value, this._inputPhrase.value);
        encode.correctKeySize();
        console.log(encode);
        let newPhrase = String();
        for (let i = 0; i < encode.key.length; i++) {
            if(DataProcessingHelper.testRegex(encode.phrase.charAt(i))){
                newPhrase = newPhrase.concat(encode.phrase.charAt(i));
            }else{
                //colocar numa função
                let position = encode.key.charCodeAt(i) - encode.referenceStart;
                let charCode = encode.phrase.charCodeAt(i) + position;
                if (charCode > encode.referenceEnd) {
                    newPhrase = newPhrase.concat(String.fromCharCode(encode.referenceStart + (charCode - encode.referenceEnd)));
                } else {
                    newPhrase = newPhrase.concat(String.fromCharCode(charCode-1));
                }
            }
        };
        return newPhrase;
    }

    _decrypt () {
        event.preventDefault();
        let decode = new Decode(this._inputKey.value, this._inputPhrase.value);
        decode.correctKeySize();
        console.log(decode);
        let originalPhrase = String();

        for (let i = 0; i < decode.key.length; i++) {
            if(DataProcessingHelper.testRegex(decode.phrase.charAt(i))){
                originalPhrase = originalPhrase.concat(decode.phrase.charAt(i));
            }else{
                //colocar numa função
                let position = decode.key.charCodeAt(i) - decode.referenceStart;
                let charCode = decode.phrase.charCodeAt(i) - position;
                if (charCode < decode.referenceStart) {
                    originalPhrase = originalPhrase.concat(String.fromCharCode(decode.referenceEnd + (charCode - decode.referenceStart)));
                } else {
                    originalPhrase = originalPhrase.concat(String.fromCharCode(charCode));
                }
            }
        };
      
        return originalPhrase;
    }

    cleanForm(){
        this._inputPhrase.value = "";
        this._inputKey.value = "";
        this._inputType.value = "encode";

        this._inputPhrase.focus();


    }
}