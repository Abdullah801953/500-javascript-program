function fibonnaciSeries(n) {
    let a=0;
    let b=1;
    console.log(a);
    if(n>=1){
        console.log(b);
    }
    for(let i=2;i<n;i++){
        let next=a+b;
        console.log(next);
        a=b;
        b=next;
    }
}
let n=10;
fibonnaciSeries(n);

