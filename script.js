const  display = document.getElementById("screen");
function apendto(input){
    display.value += input;
}
function clearscreen(){
    console.log("Clear button clicked");
    display.value = "";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(e){
        display.value = "Error";
    }
}
