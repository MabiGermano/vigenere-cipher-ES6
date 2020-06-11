class DataProcessingHelper {

    constructor () { 
        throw new Error ('Classe para processamento de dados não pode ser instanciada');
    }

    static testRegex(letter){
        let regexp = new RegExp(/[^a-zA-Z0-9]|\s+/g);
        return regexp.test(letter);
    }
}