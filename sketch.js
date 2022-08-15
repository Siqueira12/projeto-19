var foguete
var asteroide
var espaco
var meteoros














function preload(){
asteroide= loadImage("meteor_PNG37.png")
foguete= loadImage("rocket.png")

}

function setup() {
 createCanvas(400,700)
 rocket=createSprite(200,550)
 rocket.addImage(foguete)
 rocket.scale= 0.07
meteoros= new Group()
}

function draw() {
 background("black")
 drawSprites()
 pedra()
 if(rocket.isTouching(meteoros)){
rocket.destroy()

 }
 rocket.x= World.mouseX
 rocket.y= World.mouseY
}

function pedra(){
  if(frameCount%60===0){
    meteoro= createSprite(Math.round(random(50,350)),-20)
    meteoro.addImage(asteroide)
    meteoro.velocityY= 5
meteoro.scale= 0.15
meteoros.add(meteoro)
  }
}
