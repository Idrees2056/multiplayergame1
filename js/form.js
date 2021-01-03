class Form{
constructor(){

}
display(){


var title=createElement('h2')  ;     // h2 is the heading tag for second bold-h1-h6
title.html("car racing game")
title.position(130,0)
var input=createInput("name")       // create the textbox with name written in it
input.position(130,160)
var button=createButton('play')
button.position(250,200)


button.mousePressed(function(){
input.hide()            // textbox will be hidden
button.hide()

var name= input.value();  // the name of the player will be stored in var name

playerCount+=1;     //when the player enter the name then, playercount increases by 1
player.update(name);    // player field in the data base will store the name
player.updateCount(playerCount);

var greeting=createElement('h3');
greeting.html("Hello"+name);        // 
greeting.position(130,160)

})


}
}