const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {

}

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

platform = new Platform(200,290,900,20)

superman = new Superman(200,200,200,200)

monster = new Monster(900,200,100,100)

tile = new Tile(500,255,50,50)
tile1 = new Tile(500,215,50,50)
tile2 = new Tile(500,175,50,50)
tile3 = new Tile(500,135,50,50)
tile4 = new Tile(500,95,50,50)
tile5 = new Tile(500,55,50,50)

tile6 = new Tile(400,255,50,50)
tile7 = new Tile(400,215,50,50)
tile8 = new Tile(400,175,50,50)
tile9 = new Tile(400,135,50,50)

tile10 = new Tile(600,255,50,50)
tile11 = new Tile(600,215,50,50)
tile12 = new Tile(600,175,50,50)
tile13 = new Tile(600,135,50,50)
}

function draw(){
background(225)
Engine.update(engine)

superman.y = World.mouseY;
superman.x = World.mouseX;

platform.display();

tile.display();
tile1.display();
tile2.display();
tile3.display();
tile4.display();
tile5.display();

tile6.display();
tile7.display();
tile8.display();
tile9.display();

tile10.display();
tile11.display();
tile12.display();
tile13.display();

superman.display();

monster.display();

}