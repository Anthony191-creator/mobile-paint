var last_position_of_x, last_position_of_y; 
 canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext("2d");
   color = "blue";
 width_of_line = 2;
  

var width = screen.width;
new_width = screen.width - 70;
new_height = screen.height - 300;

if (width<992) {
    document.getElementsById("myCanvas").width=new_width;
    document.getElementsById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{

    console.log("my_touchmove");
    current_position_of_mouse_x =e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_mouse_y =e.touches[0].clientY - canvas.offsetTop;

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

         console.log("last_position_of_x and y cordinates")
         console.log("x =" +last_position_of_x + "y =" +last_position_of_y)
        ctx.moveTo(last_position_of_x, last_position_of_y);
          
        console.log("curren_x and current_y cordinates")
        console.log("x =" +current_position_of_mouse_x + "y =" +current_position_of_mouse_y)
       ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
       ctx.stroke();


    

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
