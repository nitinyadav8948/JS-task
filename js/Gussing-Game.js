// const prompt = require("prompt-sync")();
let max=prompt("Enter the guess number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the nuber")

while(true){
    if(guess=="quiet"){
        console.log("user quiet");
        break;
    }
    if(guess==random){
        console.log("you are write gussing the nuber" , random);
        break;
    }

    else if(guess<random){
       guess= prompt("hint:you was guess the small number: ");
    }
    else{

        guess= prompt("hint:you was guess  the large number: ");
    }
}
