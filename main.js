const arr = [
    {'type': 'other', 'text': 'Hello world'},
    {'type': 'self', 'text': 'world is small'},
    {'type': 'self', 'text': 'Hello universe'},
    {'type': 'other', 'text': 'shuddup'},
];

window.onload = () => {
    for(let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(current.type === 'self') {
            addTextBox(current.text, 1);
        }
        else if(current.type === 'other') {
            addTextBox(current.text, 0);

        }
    }
}
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