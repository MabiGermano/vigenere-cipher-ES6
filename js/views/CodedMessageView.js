class CodedMessageView extends View{
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        console.log(model);
        return model.message ? 
        `<label>Code: </label>
         <div>
            <span class="coded-message"> ${model.message} </span>
         </div>` 
         : `<span></span>`
    }
}