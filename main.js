
const submitText = (state) => {
    textArea = document.getElementById('textArea');
    text = textArea.value;
    textArea.value = '';
    console.log(text);
    addTextBox(text, state);
}

const addTextBox = (text, state) => {
    const container = document.createElement('div');
    const textVals = document.createTextNode(text);
    container.classList.add('textBubble');
    if(state) container.classList.add('self');
    else container.classList.add('other');
    
    container.appendChild(textVals);
    endDiv = document.getElementsByClassName('textBubble')[0];

    document.getElementById('textContainer').insertBefore(container, endDiv);

}