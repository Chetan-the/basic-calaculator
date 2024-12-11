const display=document.getElementsByClassName("display");
function appendToDisplay(input){
    display.value+=input;
}
function clearDisplay(){
   display.value="";
}
function calaculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value=error;
    }
  
}