class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();
    
    car1=createSprite(width/2-50,height-100)
    car1.addImage("car1", car1_Img);
    car1.scale = 0.07;
    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2", car2_Img);
    car2.scale = 0.07;
    cars=[car1,car2] 

                          
  }
 

handleElements(){
 form.hide()
 form.titleImg.position(40,50)
 form.titleImg.class("gameTitleAfterEffect")
}


  play(){
  this.handleElements()
   Player.getPlayersInfo();

    if (allPlayers !== undefined) {
     image(track, 0, -height * 5, width, height );
     var index=0
     for(var plr in allPlayers){
       index=index+1
       var X=allPlayers[plr].positionX
       var Y=height-allPlayers[plr].positionY
       cars[index-1].position.x=X
       cars[index-1].position.y=Y
       if(index===player.index){
         stroke (10)
         fill("red")
         elipse(X,Y,60,60)
         // Changing camera position in y direction 
         camera.position.x = cars[index - 1].position.x;
          camera.position.y = cars[index - 1].position.y
       }

      }

      
      this.handlePlayerControls()

      drawSprites();
    }
    
  }
  handlePlayerControls(){
    if (keyIsDown(UP_ARROW)){
      player.positionY+=10
      player.update()

    }
  }



  update(state){
    database.ref("/")
    .update({
      gameState:state
    })
  }
}











