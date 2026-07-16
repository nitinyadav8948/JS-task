let greet ="hellow";  // global scope
function changeGreet(){ 
    let greet ="namste";  //function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet);  //lexical scope
    }
   
}
console.log(greet);
changeGreet();
