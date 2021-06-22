canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs90GhrATvziKob8_JZtFWWpzDzpEWe-i1sA&usqp=CAU"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="https://www.clipartkey.com/mpngs/m/11-116784_race-car-racing-cars-clip-art-race-car.png"
car2_x=10;
car2_y=110;

background_img="https://st3.depositphotos.com/7677414/18604/i/600/depositphotos_186049646-stock-photo-motion-blurred-racetrack-end-line.jpg"

function add(){
    bg_img=new Image();
    bg_img.onload=upload_bg;
    bg_img.src=background_img;

    c1_img= new Image();
    c1_img.onload=upload_c1;
    c1_img.src=car1_img;

    c2_img= new Image();
    c2_img.onload=upload_c2;
    c2_img.src=car2_img;
}

function upload_bg() {
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
    }

function upload_c1() {
        ctx.drawImage(c1_img,car1_x,car1_y,car1_width,car1_height);
        }    

function upload_c2() {
            ctx.drawImage(c2_img,car2_x,car2_y,car2_width,car2_height);
            }           

window.addEventListener("keydown",Keydown);

function Keydown(e){
    var buttoncode=e.keyCode;
    console.log(buttoncode);
    if (buttoncode=="38"){
        up();
    }
    if (buttoncode=="40"){
        down();
    }
    if (buttoncode=="37"){
        left();
    }
    if (buttoncode=="39"){
        right();
    }    
    if (buttoncode=="87"){
        up2();
    }
    if (buttoncode=="83"){
        down2();
    }
    if (buttoncode=="65"){
        left2();
    }
    if (buttoncode=="68"){
        right2();
    }    
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        upload_bg();
        upload_c1();
        upload_c2();
    }
}
function down(){
    if(car1_y<=400){
        car1_y=car1_y+10;
        upload_bg();
        upload_c1();
        upload_c2();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        upload_bg();
        upload_c1();
        upload_c2();
    }
}
function right(){
    if(car1_x<=900){
        car1_x=car1_x+10;
        upload_bg();
        upload_c1();
        upload_c2();
    }
}

function up2(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        upload_bg();
        upload_c2();
        upload_c1();
    }
}
function down2(){
    if(car2_y<=400){
        car2_y=car2_y+10;
        upload_bg();
        upload_c2();
        upload_c1();
    }
}
function left2(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        upload_bg();
        upload_c2();
        upload_c1();
    }
}
function right2(){
    if(car2_x<=900){
        car2_x=car2_x+10;
        upload_bg();
        upload_c2();
        upload_c1();
    }
}