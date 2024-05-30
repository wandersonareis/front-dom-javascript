const text = document.getElementById("text");
const sizeText = document.getElementById("fontSize");

const currentTextFontSize = () => {
    let currentSize = getComputedStyle(text, null).getPropertyValue("font-size");
    let fontSize = parseFloat(currentSize) || 16;
    sizeText.textContent = fontSize

    return fontSize
}
currentTextFontSize();

const buttonUnderline = document.getElementById("btn-underline");
buttonUnderline.onclick = () => {
  pUnderlineStyle();
};

const buttonItalic = document.getElementById("btn-italic");
buttonItalic.onclick = () => {
  pItalicStyle();
};

const buttonBold = document.getElementById("btn-bold");
buttonBold.onclick = () => {
  pBoldStyle();
};

const buttonDecrease = document.getElementById("btn-decrease");
buttonDecrease.onclick = () => {
  pFontDecrementSize();
};

const buttbuttonIncrease = document.getElementById("btn-increase")
buttbuttonIncrease.onclick = () => {
  pFontIncrementSize();
};

const btnRedBox = document.querySelector(".bg-red-600");
btnRedBox.onclick = () => {
  textRed();
};

const btnBlueBox = document.querySelector(".bg-blue-600");
btnBlueBox.onclick = () => {
  textBlue();
};

const btnPurpleBox = document.querySelector(".bg-purple-600");
btnPurpleBox.onclick = () => {
  textPurple();
};

const btnBlackBox = document.querySelector(".bg-black");
btnBlackBox.onclick = () => {
  textBlack();
};

function pUnderlineStyle() {
  if (text.style.textDecoration === "underline"){
    text.style.textDecoration = "none"
    return
  }
  
  text.style.textDecoration = "underline"
}

function pItalicStyle() {
  if (text.style.fontStyle === "italic"){
    text.style.fontStyle = "normal"
    return
  }
  
  text.style.fontStyle = "italic"
}

function pBoldStyle() {
  if (text.style.fontWeight === "bold"){
    text.style.fontWeight = "normal"
    return
  }
  
  text.style.fontWeight = "bold"
}

function pFontIncrementSize() {
  text.style.fontSize = `${currentTextFontSize() + 1}px`;
  currentTextFontSize();
}

function pFontDecrementSize() {    
    if (currentTextFontSize() <= 12) return;
    
    text.style.fontSize = `${currentTextFontSize() - 1}px`;
    currentTextFontSize();
}

function textRed() {
  text.style.color = "red";
}

function textBlue() {
  text.style.color = "blue";
}

function textPurple() {
  text.style.color = "purple";
}

function textBlack() {
  text.style.color = "black";
}
