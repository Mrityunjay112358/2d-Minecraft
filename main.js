canvas = new fabric.Canvas("myCanvas");

player_x= 10;
player_y= 10;
block_img_width =30;
block_img_height =30;

player_object = "";
image_block_object = "";

function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({top:player_y,left:player_x});
canvas.add(player_object);
});
}

function newimg(get_image){
fabric.Image.fromURL(get_image,function(Img){
    image_block_object = Img;
    image_block_object.scaleToWidth(block_img_width);
    image_block_object.scaleToHeight(block_img_height);
    image_block_object.set({top:player_y,left:player_x});
canvas.add(image_block_object);


});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if(keypress == 38){
        up();
        console.log("up");
    }

    if(keypress == 40){
        down();
        console.log("down");
    }

 if(keypress ==37){
     left();
     console.log("left");
 }

 if(keypress == 39){
     right();
     console.log("right");
 }

if(keypress == 67){
    newimg("cloud.jpg");
    console.log("c is pressed");
}

if(keypress == 68){
    newimg("dark_green.png");
    console.log("d is pressed");
}

if(keypress == 71){
    newimg("ground.png");
    console.log("g is pressed");
}

if(keypress == 76){
    newimg("light_green.png");
    console.log("l is pressed");
}

if(keypress == 82){
    newimg("roof.jpg");
    console.log("r is pressed");
}

if(keypress == 84){
    newimg("trunk.jpg");
    console.log("t is pressed")
}

if(keypress == 85){
    newimg("unique.png");
    console.log("u is pressed")
}

if(keypress == 87){
    newimg("wall.jpg");
    console.log("w is pressed")
}

if(keypress == 89){
    newimg("yellow_wall.png");
    console.log("y is pressed")
}

if(keypress == 32){
    canvas.remove(image_block_object);
    console.log("space is pressed")
}

 if(e.shiftKey == true & keypress == "80"){
    console.log("p and shift is pressed together");
    block_img_height = block_img_height+10;
    block_img_width = block_img_width+10;
    document.getElementById("current_height").innerHTML=block_img_height;
    document.getElementById("current_width").innerHTML=block_img_width;

}

if(e.shiftKey == true & keypress == "77"){
    console.log("m and shift is pressed together");
    block_img_height = block_img_height-10;
    block_img_width = block_img_width-10;
document.getElementById("current_height").innerHTML=block_img_height;
document.getElementById("current_width").innerHTML=block_img_width;

}
}

function up(){
if(player_y>=0){
    player_y = player_y-block_img_height;
    console.log("block image height = "+block_img_height);
    console.log("when up arrow key is pressed,X= " + player_x +"y is ="+player_y);
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if(player_y <= 460){
player_y = player_y+block_img_height;
console.log("block image height = "+block_img_height);
console.log("when up arrow key is pressed,X= " + player_x +"y is ="+player_y);
canvas.remove(player_object);
    player_update();
    }
}

function right(){
    if(player_x <= 850){
player_x = player_x+block_img_width;
console.log("block image width = "+block_img_width);
console.log("when up arrow key is pressed,X= " + player_x +"y is ="+player_y);
canvas.remove(player_object);
    player_update();
    }
}

function left(){
    if(player_x >= 0){
player_x = player_x-block_img_width;
console.log("block image width = "+block_img_width);
console.log("when up arrow key is pressed,X= " + player_x +"y is ="+player_y);
canvas.remove(player_object);
    player_update();
    }
    
}

