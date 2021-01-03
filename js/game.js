class Game{
    constructor(){

    }
    getState(){                                 // to get the gamestate from db
        var gameStateRef=database.ref('gameState')  // refer the gamestate from db
        gameStateRef.on("value",function(data){         // .on --> works as a listener read the values and not update
            gameState=data.val();
        })
    }

    // update the gameState
    update(state){
        database.ref('/').update({              // update---> update the game State
            gameState:state                     // game State: wait(0), play(1), end(2)
        })
    }
    start(){
        if(gameState===0){
            player=new Player(); // player object is calling the Player class
            player.getCount();   // calling the function getcount
            form=new Form();
            form.display();
                } 
    }



}