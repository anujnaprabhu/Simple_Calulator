function appendCharacter(char) {
    document.getElementsByName('display')[0].value += char;
}

function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLastEntry() {
    var displayValue = document.getElementsByName('display')[0].value;
    document.getElementsByName('display')[0].value = displayValue.slice(0, -1);
}

function calculate() {
    var displayValue = document.getElementsByName('display')[0].value;
    try {
        document.getElementsByName('display')[0].value = eval(displayValue);
    } catch (error) {
        document.getElementsByName('display')[0].value = 'error';
    }
}
