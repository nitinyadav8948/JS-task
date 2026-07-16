let favMovi="avatar";
let guess=prompt("guess my favoriet movie");
while(guess!=favMovi ){
    if(guess==="quiet"){
        console.log("you quiet");
        break;
    }
   
    guess=prompt("please try again ")
}

    if (guess==favMovi){
        console.log("congrats!")
    }
