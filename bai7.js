for(let i=1; i<=100; i++){
    document.write(i+"<br>");
    if(i%3==0){
        document.write("Fizz <br>");
    }else if(i%5==0){
        document.write("Buzz <br>");
    }else if(i%5==0 && i%3==0){
        document.write("FizzBuzz <br>");
    }
}