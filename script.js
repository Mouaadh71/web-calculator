const  display = document.getElementById("screen");
function apendto(input){
    display.value += input;
}
function clearscreen(){
    console.log("Clear button clicked");
    display.value = "";
}
function calculate(){
    display.value = eval(display.value);
}