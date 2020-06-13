class View {
    constructor(element) {
        this._element = element;
    }

    template(){
        throw new Error('The method \'template\' must be implemented');
    }
    update(model) {
        this._element.innerHTML = "";
        this._element.innerHTML = this.template(model);
        console.log(model);
        console.log(this.template(model));
    }
}