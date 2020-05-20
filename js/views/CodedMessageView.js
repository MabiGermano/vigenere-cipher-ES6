class CodedMessageView extends View{
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.message ? `<p class="alert alert-success">${model.mensagem}</p>` : `<p></p>`
    }
}