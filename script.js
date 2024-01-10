const canvas=document.getElementById("canvas1");
const canvasWidth=canvas.width=640;
const canvasHeight=canvas.height=480;
const ctx=canvas.getContext("2d");
const body=document.getElementById("body");

// If we can connect the music with motion.
let size=20;
let x=320-size*0.5;
let y=240-size*0.5;
let speedX=2;
let speedY=2;
let hitX=false;
let colorBox="";

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    x=x+speedX; //Increasing the x value
    y=y+speedY;

    //Making the rectangle realize the WALL.
    if(x>=canvas.width-size) {
        hitX=true
        speedX=-speedX;
        canvas.style.left=`55%`;
        body.style.backgroundColor="red";
        canvas.style.boxShadow=`0 0 30px 5px pink`;
        canvas.width*=1.03;
        canvas.height*=1.03;
        size*=1.03;
        colorBox="#EDB7ED";

        
        

    }
   
    else if(x<=0){
        speedX=-speedX;
        canvas.style.left=`50%`;
        body.style.backgroundColor="turquoise";
        canvas.style.boxShadow=`0 0 30px 5px pink`;
        canvas.width*=1.03;
        canvas.height*=1.03;
        size*=1.03;
        colorBox="#8DDFCB";
        




        



    }
    if(y>=canvas.height-size){
        speedY=-speedY;
        canvas.style.top=`55%`;
        body.style.backgroundColor="limegreen";
        canvas.style.boxShadow=`0 0 30px 5px pink`;
        canvas.width*=1.03;
        canvas.height*=1.03;
        size*=1.03;
        colorBox="#ECEE81";


        


    }
    else if(y<=0) {
        speedY=-speedY;
        canvas.style.top=`50%`;
        body.style.backgroundColor="yellow";
        canvas.style.boxShadow=`0 0 30px 5px pink`;
        canvas.width*=1.03;
        canvas.height*=1.03;
        size*=1.03;
        colorBox="#ECEE81";


        



    }
     ctx.fillStyle=`${colorBox}`;
    ctx.fillRect(x,y,size,size);
    requestAnimationFrame(animate);

}
animate();
