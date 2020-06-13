class DataProcessingHelper {

    constructor () { 
        throw new Error ('Classe para processamento de dados não pode ser instanciada');
    }

    static testRegex(letter){
        let regexp = new RegExp(/[^a-zA-Z0-9]|\s+/g);
        return regexp.test(letter);
    }

    static validateField (element) {
        
        if(element.id == 'phrase'){
            console.log("entrou");
            let regexp = new RegExp(/[áàâãéèêíïóôõöúçñśṕÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑŚṔ]+/g);
            return regexp.test(element.value) ? `The 'Phrase' field must not contain the following characters: 'á, à, â, ã, é, è, ê, í, ï, ó, ô, õ, ö, ú, ç, ñ, ś, ṕ'` : ""; 
        } else if(element.id == 'key'){
            return this.testRegex(element.value) ? `The 'Key' field must not contain any special character` : "";
        }
    }
}