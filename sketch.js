var canvas;
var music;
var first, second, third, last;
var edges;

function preload() {
  music = loadSound("music.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);

  //create 4 different surfaces

  first = createSprite(100, 480, 100, 10);
  first.shapeColor = "green";

  second = createSprite(235, 480, 100, 10);
  second.shapeColor = "red";

  third = createSprite(370, 480, 100, 10);
  third.shapeColor = "yellow";

  last = createSprite(500, 480, 100, 10);
  last.shapeColor = "blue";

  //create box sprite and give velocity

  box = createSprite(300, 250, 20, 20);
  box.shapeColor = "white";
  box.velocityY = +random(8, 10);
  box.velocityX = +random(3, 5);
}

function draw() {
  background(rgb(100, 0, 169));
  //create edgeSprite

  edges = createEdgeSprites();

  box.bounceOff(edges);

  //add condition to check if box touching surface and make it box

  if (box.isTouching(first) && box.bounceOff(first)) {
    box.shapeColor = "green";
    music.play();
  }

  if (box.isTouching(third) && box.bounceOff(third)) {
    box.shapeColor = "yellow";
    music.play();
  }

  if (box.isTouching(last) && box.bounceOff(last)) {
    box.shapeColor = "blue";
    music.play();
  }

  if (box.isTouching(second)) {
    box.shapeColor = "black";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
  }
  drawSprites();
}
