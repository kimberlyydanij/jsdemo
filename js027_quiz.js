/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

//[출력결과]를 참고하여 separator함수를 구현하세요.

separator('http://www.daum.net');
separator('ftp://ftp.microsoft.com');
let a = 0;
function separator(data) {
    
    // chk(data);
    for(i=0;i<=data.length;i++) {
      if (data[i] == ":") {
     a = i; 
    break; }
     }
    
     console.log('protocal: ');
     for(i=0;i<=a;i++)
     console.log[i];

    }

     //a = i;
     //console.log(a);
    // console.log(chk1);


function chk(data) {   
  for(let i=0;i<=data.length;i++)
    console.log(data[i]) 
   //if(data[i]==/) 
   //return data[i];
}

separator('http://www.daum.net');
separator('ftp://ftp.microsoft.com');

/*
[문제2]
[데이터]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 진여구
연락처: 010-***-2253
*/

let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };

//출력결과를 참고하여 display()함수를 구현하세요
function display(customer) {}
display(person1);
display(person2);