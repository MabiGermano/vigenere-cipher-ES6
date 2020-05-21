class CodedMessageView extends View{
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        console.log(model);
        return model.message ? `<span>${model.message}</span>` : `<span></span>`
    }
}