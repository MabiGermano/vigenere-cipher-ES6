class ResultCodeMessage {
    constructor(resultTxt = '', keyTxt = '') {
        this._result = resultTxt;
        this._key = keyTxt;
    }

    get result() {
        return this._result;
    }

    set result(text){
        this._result = text;
    }
    get key() {
        return this._key;
    }

    set key(text){
        this._key = text;
    }
}