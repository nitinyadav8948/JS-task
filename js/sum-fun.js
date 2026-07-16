function getsum(n){
    let sum=0;
    for (let i=1;i<=n; i++){
        sum+=i;
    }
    return sum;
}
let n=getsum(10);
console.log(n)