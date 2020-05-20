class ResultField {
    constructor(trap){
        this._text = "";
        this._trap = trap;
    }

    add(text) {
        this._text.push(text);
        this._trap(this);
    }

    clean(){
        this._text = "";
        this._trap(this);
    }
}