function multipelgreet( func , count){
    for(let i=1; i<=count; i++){
        func();
    }

}


let greet=function(){
    console.log("nitin");
}

multipelgreet(greet,5)