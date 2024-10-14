function tinhTong30SoChiaHet7() {
    let count = 0;//dem so luong so
    let sum=0;//tong cac so chia het cho 7
    let number=1;//bat dau tu so tu nhien dau tien
    while(count<30){
        if(number%7==0){
            sum += number;//cong don vao tong
            count++; //tang so luong da tim thay
        }
        number++; //kiem tra so tiep theo
    }
    return sum; //tra ve tong
}
let total=tinhTong30SoChiaHet7();
document.write("Tong 30 so dau tien chia het cho 7 la "+total);