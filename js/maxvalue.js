 let max=[1,3,4,5,63,7,7,8,23,7];
// let result=max.reduce((res,el)=>{
//     if(res<el){
//         return el;
//     }
//     else{
//         return res;
//     }
// });
// console.log(result);



let num=-1;
for (let i=0; i<=max.length; i++){
    if(num<max[i]){
        num=max[i];
    }

}
console.log(num);

