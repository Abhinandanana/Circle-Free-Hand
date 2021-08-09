var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e) {
        Colour= document.getElementById("colour").value ;
        width_of_line= document.getElementById("width_of_line").value ;
mouseEvent= "mouseDown";
    }
    
    canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
CurrentPositionofX= e.clientX-canvas.offsetLeft;
CurrentPositionofY= e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle= Colour;
    ctx.lineWidth= width_of_line;
ctx.arc(CurrentPositionofX, CurrentPositionofY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent= "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
mouseEvent= "mouseLeave";
}
function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
