const submitText = () => {
    textArea = document.getElementById('textArea');
    text = textArea.value;
    textArea.value = '';
    console.log(text);
    addTextBox(text);
    

}

const addTextBox = (text) => {
    const container = document.createElement('div');
    const textVals = document.createTextNode(text);
    container.appendChild(textVals);
    endDiv = document.getElementById('endDiv');
    document.body.insertBefore(container, endDiv);
    
}