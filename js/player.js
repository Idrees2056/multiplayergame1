class Player{
    constructor(){

    }

    // get/read the playerCount from the database
    getCount(){
        var playerCountRef=database.ref('playerCount')
        playerCountRef.on("value",function(data){
            playerCount=data.val();
        })
    
    }

    // update the playercount
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

// update/add the name in the new field created as player
update(name){
var playerIndex="player"+playerCount;
database.ref(playerIndex).set({
    name:name
})
}


}