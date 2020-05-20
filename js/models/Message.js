class Message {

    constructor(text = '') {
        this._message = text;
    }

    get mensagem() {

        return this._message;
    }

    set mensagem(text){
        this._message = text;
    }
}