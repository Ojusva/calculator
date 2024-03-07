const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
    // alert("calculator");
}

function clearToDisplay(){
    display.value="";
}

function calculate(){
    try {
    display.value=eval(display.value)
}
    catch(error){
    display.value="error"
}

}

function Remove(input) {
    display.value=display.value.toString().slice(0,-1);
}
