class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h1');
        this.note = createElement('h3');
        this.reset = createButton('Reset');


    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.note.hide();

    }

    display(){
        background(bg2);
        this.title.html("CYCLE RACE");
        this.title.position(480, 10);
    
        this.note.html("NOTE: This game requires 3 players");
        this.note.position(400, 350);

        this.input.position(500, 200);
        this.button.position(560, 250);
        this.reset.position(1100,20);

        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
          this.greeting.html("Hello " + player.name)
          this.greeting.position(520, 200);
        });
    
        this.reset.mousePressed(()=>{
          player.updateCount(0);
          game.update(0);
        
        database.ref("/").update({
          players: null,
          finishedPlayers: 0,
        });});
      }
    }
    
