let todo=[];
 let req=prompt ("Eneter the Request")

while(true){

    if (req=="quit"){
        console.log("you quit")
        break;
    }
    if(req=="list"){

    for(let i=0; i<todo.length;i++){
        console.log(i, todo[i]);
    }
}
       else if(req=="add"){
        let task=prompt("enter the task");
        todo.push(task);
        console.log("task add")
    }
    else if(req=="delete"){
        let idx=prompt("enter the index");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("request wrong")
    }
    
    req=prompt("Eneter the request")
}

