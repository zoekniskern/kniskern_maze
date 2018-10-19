/*Assignment 7: Modified L-System
* Zoe Kniskern
* 
* 

*/
//window.onload = init;
//window.onload = init();

const canvas = document.getElementById("mainCanvas");
const ctx = mainCanvas.getContext('2d', {alpha: false});


let w, h, counter = 0;

let mazePoints = [];
let mazeSegs = [];

const TWO_PI = 2 * Math.PI;


//update canvas
function updateCanvasSize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    //requestAnimationFrame(draw);

    init();
}
updateCanvasSize();
window.addEventListener('resize', updateCanvasSize);
init();

//L SYSTEM
function radians(degrees) {
    return (degrees/180) * Math.PI;
}

function randRange(min, max) {
    return min + Math.random() * (max - min);
}

function randItem(arr) {
    return arr[Math.ceil(Math.random() * arr.length)];
}

//build grid dots
//help from https://codepen.io/veljamatic/pen/pypxRR?editors=0010
function grid(width, height, separation, size) {
    console.log('grid ran');
    ctx.fillStyle = 'blue';

    for (let x = separation; x < width; x += separation) {
        for (let y = separation; y < height; y += separation) {
            ctx.beginPath();
            //ctx.arc(x, y, 3, 0, TWO_PI);
            //ctx.fillRect(x - size/2, y - size/2, size, size);
            ctx.closePath();
            ctx.fill;

            let c, e, p;

            p = false;

            //is the point an edge
            if(x == separation) {
                e = true;
                ctx.fillStyle = 'red';
            } else if(y == separation) {
                e = true;
                ctx.fillStyle = 'red';
            }
             else{
                e = false;
                ctx.fillStyle = 'black';
            }

            //is the point a corner
            // if(x == separation && y == separation) {
            //     c = true;
            //     ctx.fillStyle = 'white';
            // } else{
            //     c = false;
            //     ctx.fillStyle = 'black';
            // }

            mazePoints.push(new mazePoint(x,y,c,e,p))

            ctx.fillRect(x - size/2, y - size/2, size, size);
        }
    }

    console.dir(mazePoints);
}

/*
Testing ability to draw lines by graph point

function buildMaze(){
    //let startPoint = randItem(mazePoints);
    let startPoint = mazePoints[0];
    ctx.fillRect(startPoint.xPos - 5/2, startPoint.xPos - 5/2, 5, 5);

    let turtle = new Turtle(Vec2(startPoint.xPos, startPoint.yPos));

    let p1 = turtle.pos.copy();
    turtle.moveTo(Vec2(startPoint.xPos + 100, startPoint.yPos));
    ctx.fillRect(startPoint.xPos + 100 - 5/2, startPoint.xPos - 5/2, 5, 5);
    let p2 = turtle.pos.copy();

    turtle.moveTo(Vec2(startPoint.xPos + 200, startPoint.yPos));
    let p3 = turtle.pos.copy();
    mazeSegs.push(p1);
    mazeSegs.push(p2);
    mazeSegs.push(p3);

    for(let i = 0; i < mazeSegs.length - 1; i++) {
        let seg = mazeSegs[i];
        let segNext = mazeSegs[i + 1];
        
        ctx.beginPath();
        ctx.moveTo(seg.x, seg.y);
        ctx.lineTo(segNext.x, segNext.y);
        ctx.fillStyle = 'green';
        ctx.strokeWidth = 5;
        ctx.stroke();
        console.log("line drawn");
        console.dir(mazeSegs);
    }

}
*/

//maze point constructor
function mazePoint( x ,y ,corn, ed, pass){
    this.xPos = x;
    this.yPos = y;
    this.corner = corn;
    this.edge = ed;
    this.passed = pass;
};

//init function
function init() {
    console.log('I ran');
    //updateCanvasSize();
    //window.addEventListener('resize', updateCanvasSize);

    ctx.fillStyle = 'gray';
    ctx.fillRect(0,0,w,h);

    grid( w, h, 100, 1);

    buildMaze();
}

function draw(t) {

  

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);

