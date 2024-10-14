function soFibDauTienChiaHet5() {
    let a=0; //so fib dau tien
    let b=1; //so fib thu hai
    while(true){
        let next= a+b;
        if(next % 5 == 0){
            return next;
        }
        //cap nhat cac so fib
        a=b;
        b=next;
    }
}
let result=soFibDauTienChiaHet5();
document.write("So fib dau tien chia het 5 la "+result );