// js018_for.js
/* 
    for문은 조건식을 만족할 때 까지 특정 실행문을 반복해서 실행한다.
    for*(초기값; 조건식; 증감식) {
        실행문;
    }
    for 문에서 조건식을 생략하면 무한루프로 실행된다.    
*/

for(let i = 1; i <=5; i++){
    console.log(i);
}

let i=1;
let sum=0;
for(;  sum<30; i++) 
  sum += i

console.log(`sum=${sum}`, `i=${i}`);

let j = 1;
let sum1 = 0;
for(;  ; j++) {
    sum1 += j
    if(sum1 >= 30) break;
}
console.log(`sum=${sum1}`, `j=${j}`);

// 1~10 까지의 수에서 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하라

let even = 0;
let odd = 0;
for(let a=1; a<=10; a++) {
    if(a%2==0) {
        even += a;
    } else odd += a;
}
console.log(`짝수의 합은 ${even}, 홀수의 합은 ${odd}`);

/* 
Continue : 반복문에서 continue을 만나면 조건식으로 이동한다.
for(초기식;조건식;증감식) {countinue;}
while(조건식){countinue;} 
*/

for(let c=1; c<=10; c++) {
    if(c%3==0) {
    continue; }
    console.log(c);
}

console.log('===========')
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++) {
        console.log(`i=${i} j=${j}`);
    }
}

console.log('====================')
for(let i=1; i<=3; i++){
    for(let j=1; j<=3; j++) {
       // console.log(`i=${i} j=${j}`);
       process.stderr.write(`i=${i} j=${j}, `);
    }
    process.stderr.write('\n');
}

// \, 이스케이프 : 프로그램에서 주변장치를 컨트롤 하기 위해서 사용하는 기능
// \n 줄바꿈, \t 탭, \", \', \b 백스페이스, \v 수직탭
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

// label 정의
console.log('====================')
movie: for(let i=1; i<=5; i++) {
    for(let j=10; j<=13; j++) {
           for(let k=1; k<=3; k++) {
            console.log(`i=${i}, j=${j}, k=${k}`);
            if (k==2) break movie; }
    }
}