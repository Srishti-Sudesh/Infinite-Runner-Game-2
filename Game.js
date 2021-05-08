class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
           form = new Form()
          form.display();
        }
        

    
    c1 = createSprite(100,160);
    c1.scale = 0.065;
    c1.addImage("1c",c1Img);

    c2 = createSprite(100,340);
    c2.addImage("2c",c2Img);
    c2.scale = 0.04;

    c3 = createSprite(100,520);
    c3.addImage("3c",c3Img);
    c3.scale = 0.075;

    cycles = [c1, c2, c3];
   }

    play(){

    form.hide();

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(ground);
      image(bg,1200*5,0,-1200*5,600);

      drawSprites();

      var index = 0;

      var y = 0;
      var x;

      for(var plr in allPlayers){
        index = index + 1 ;

       y = y + 180;

        x = 200 + allPlayers[plr].distance;
        cycles[index-1].x = x;
        cycles[index-1].y = y;


        if (index === player.index){
          camera.position.y = 300;
          camera.position.x = cycles[index-1].x+100;
        }
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
      console.log("distance: " + player.distance);
    }

    if(player.distance>=5650){
      gameState = 2
    }

  }

  end(){
    background(bg3);
    console.log("gameState : end");

  }


}
