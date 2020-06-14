class CodedMessageView extends View{
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.result ? 
        `
        <div class="col-md-7 col-sm-12">
        <table class="table text-center">
            <thead>
                <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Result</th>
                    <th scope="col">Copy</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-wrap">${model.key}</td>
                    <td class="text-wrap">${model.result}</td>
                    <td class="text-wrap">
                        <a>
                            <i class="material-icons">content_copy</i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>` 
         : `<span></span>`
    }
}