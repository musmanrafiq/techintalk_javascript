console.log('Hi') ;
const myButton = document.getElementsByTagName('button')[0];

myButton.addEventListener('onclick', onButtonClick)
function onButtonClick() {
console.log("I m clicked");
}