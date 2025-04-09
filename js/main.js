
// By ID
//document.getElementById("")
const mainTitle = document.getElementById("main-title");
mainTitle.innerText = "Loop Troop E-Commerce";

//By Class Name
//document.getElementsByClassName("")
const infoCollection = document.getElementsByClassName("info");
const infoElementArr = [...infoCollection];
infoElementArr.forEach( elm => {
    elm.style.color = "purple";
    elm.style.border = "2px solid purple";
    elm.style.borderRadius = "5em";
    elm.style.padding = "1em";
    elm.style.backgroundColor = "#ddd";
})

//By Tag Name
//document.getElementsByTagName("")
const allParagraphHtmlCollection = document.getElementsByTagName("p");

//By CSS Selectors
//document.querySelector
//document.querySelectorAll
const firstHeader = document.querySelector("header h2");
firstHeader.style.border = "2px solid purple";

const allHeader = document.querySelectorAll("header h2");

allHeader.forEach( elm => {
    elm.style.color = "#565";
})