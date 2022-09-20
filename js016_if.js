//js016_if.js
/*
제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
1. 조건문 : if-else
2. 선택문 : switch ~ case
3. 반복문 : for, while

조건문 : 조건식의 값이 참인지 거짓인지에 따라 실행문의 제어가 결정된다.

    if문은 조건식이 만족(true)할 경우에만 실행문을 실행한다.
        if(조건식) {
            실행문;  }
*/

let data = 0;
if(data == 0) {
    console.log('program end');
}
// null, undefined, "", 0, false => false로 인식한다 (존재론적으로 따져서 없는 값이므로)
if (null) {
    console.log('data');
}
if ("10") {
    console.log('10');
}

/* if(조건식) {
    실행문 ;
    } else {
        실행문;
    } */

    let num = 7;
    if(num % 2 == 0) {
        console.log(`${num}의 값은 짝수입니다.`);
        } else {
            console.log(`${num}의 값은 홀수입니다.`);
    }
    if(num % 2) {
        console.log(`${num}의 값은 홀수입니다.`);
        } else {
            console.log(`${num}의 값은 짝수입니다.`);
    }

    /* 여러 조건식이 필요할때 사용되는 조건문이다.
    if(조건식1) {
        실행문1;
    }   else if(조건식2) {
        실행문2;
    }   else if(조건식3) {
        실행문;      } */

    // >= 이상, <= 이하, <미만, >초과    
    let jumsu=85;
    if(jumsu>=90) {
        console.log('A');
    } else if(jumsu>=80) {
        console.log('B');
    } else if(jumsu>=70) {
        console.log('C');
    } else {
        console.log('D');
    }

    /* check 변수의 값이 'D' => D는 대문자 입니다.
                        'd; = >d는 소문자 입니다.
                       그외 => ? 기타입니다. */

    let x = 'A';
    console.log(x >= 'A' && x <= 'Z');
    let y = 'a';
    console.log(y >= 'a' && y <= 'z');


    let data1 = 'c'
    if(data1 >= 'A' && data1 <= 'Z') {
        console.log(`${data1}은 대문자 입니다.`) ;
    } else if(data1 >= 'a' && data1 <= 'z') {
        console.log(`${data1}은 소문자 입니다.`);
    } else {
        console.log(`${data1}은 기타입니다.`);
    }

    let data2 = 'Yy';
        let datatype = typeof(data2);
        /// console.log(`${datatype}`);
    if(datatype === 'string') {
        if(data2.toUpperCase() === data2) {
        console.log(`${data2}은 대문자 입니다`);
    } else { console.log(`${data2}은 소문자 입니다`); } }
        else { console.log(`${data2}은 기타입니다.`)}  

    console.log(parseInt(85/10));
    
    let jumsu1 = 85;
    switch(parseInt(jumsu/10)) {
       case 10: console.log('A') ; break;
       case  9: console.log('A') ; break;
       case  8: console.log('B') ; break;
       case  7: console.log('C') ; break;
       case  6: console.log('D') ; break;
       default:  console.log('F') ; break; }