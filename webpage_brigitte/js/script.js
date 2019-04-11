


// START (ONMOUSEOVER) AND STOP (ONMOUSEOUT) ANIMATION SPRITE: COLUMN 3  
    const image = document.getElementById("image-sprite-bird")
    let changePos;

    function stopAnimate() {
      clearInterval(changePos);
    }

    /*function animateScript () {
      let positionHorizontal = 0; //start position image sprite
      let positionVertical = 0;
      const positionOffset = 256; //position offset
      changePos = setInterval (() => { 
        image.style.backgroundPosition = `-${positionHorizontal}px -${positionVertical}px`; 
        if (positionHorizontal < 1536 & positionVertical < 1536) {
          positionHorizontal += positionOffset //increment position 
        } else if (positionVertical < 1536) {
          positionHorizontal = 0; //reset position
          positionVertical += positionOffset;
        } else {
          positionHorizontal = 0;
          positionVertical = 0;
        }
      }, 43)
    }*/

    function animateScript () {
      let position = 0; //start position image sprite 
      const positionOffset = 256; //position offset
      changePos = setInterval (() => { 
        image.style.backgroundPosition = `-${position}px 0px`; 
        if (position < 12288) {
          position += positionOffset //increment position 
        } else {
          position = 0;        
        }
      }, 43)
    }


//MOVING IMAGE WITH MOUSEMOVE: CIRCLE-BOX BEE PAPER AND PATTERNS 

var x;
var y;
var oldX = 0;
var oldY = 0;

function move(event) {
    x = event.offsetX;
    y = event.offsetY;
    bee.style.top = y + 'px';
    bee.style.left = x + 'px';
    bee.style.transition = "left 0.3s linear 0s, top 0.3s linear 0s";
    if(x > oldX){
        dir = "right";
      } else {
        dir = "left";
      }
    oldX = x;
    if (dir == "right"){
        bee.setAttribute("class", "right");
      } else {
        bee.setAttribute("class", "left");        
      }
}


//CHANGE BACKGROUND ON MOUSEOVER: CIRCLE-BOX BEE PAPER AND PATTERNS

const container = document.getElementById("container");
const hoverbox = document.getElementById("container-background");

hoverbox.addEventListener("mouseover", patternVisible); 
hoverbox.addEventListener("mouseout", patternInvisible); 

function patternVisible () {
  container.style.backgroundImage = 'url(./img/bee7pattern.png)';
  
}

function patternInvisible () {
  container.style.backgroundImage = 'url(./img/pumpkinnew_web4.png)';
 
}
















