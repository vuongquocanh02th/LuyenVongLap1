
while (true){
    let temp=parseFloat(prompt("Nhap nhiet do"));
    if(temp<20){
        alert("Tang nhiet do");
    }else if(temp>100){
        alert("Giam nhiet do");
    }else if(isNaN(temp)){
        alert("Nhap nhiet do");
    }else{
        alert("Ok");
        break;
    }
}