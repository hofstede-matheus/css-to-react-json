import {convertToJSON} from "./parser.js";

const cssTextArea = document.getElementById("cssTextArea");
const jsonTextArea = document.getElementById("jsonTextArea");

setListeners();

function setListeners() {
    cssTextArea.addEventListener('change', onCssTextAreaChange);
}

function onCssTextAreaChange(){
    jsonTextArea.focus();
    jsonTextArea.value = convertToJSON(cssTextArea.value);
}
