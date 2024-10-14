function tongFib(n){
    let a=0;//so fib dau
    let b=1;//so fib thu 2
    let sum=a+b;
    for(let i=2; i<n; i++){
        let next=a+b;//tinh so fib tiep theo
        sum+=next; //cong don vao tong
        //Cap nhat cac so fib
        a=b;
        b=next;
    }
    return sum;
}
let total=tongFib(20);
document.write("Tong 20 so fib dau tien: "+total);