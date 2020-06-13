class InvalidFieldView extends View{

    constructor(element) {
        super(element);
    }
    
    template(model) {
        return model.message || '' ? 
            `<div class="alert alert-warning" role="alert">
                ${model.message}
            </div>` 
        : `<div></div>`;
    }
}