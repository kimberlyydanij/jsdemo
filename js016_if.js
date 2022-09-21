//js016_if.js
/*
제어문(statement) : 프로그램의 흐름을 제어할 수 있는 실행문이다.
1. 조건문 : if-else
2. 선택문 : switch ~ case
3. 반복문 : for, while
4. label(임의로 정의) : continue, break

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

/*
        code='a100'이면 '채소류', code='b200; '육류', code='b300' 이면 '생선류' 출력
*/

let code = 'b200';
switch(code){
    case 'a100' : console.log('채소류'); break;
    case 'b200' : console.log('육류') ; break;
    case 'c300' : console.log('생선류');
}

/*
  switch-case 문을 이용해서 년도에 해당하는 띠를 구하는 프로그램을 구현하시오.
  1. 12간지 띠
    원숭이, 닭, 개, 돼지, 쥐, 소, 호랑이, 토끼, 용, 뱀, 말, 양
  2. 띠 구하는 공식
     year%12의 결과가
     0 원숭이, 1 닭, 2 개, 3 돼지, 4 쥐, 5 소, 6 호랑이, 7 토끼, 8 용, 9 뱀, 10 말, 11양
  3. 출력결과 "2012년도의 태생은 용띠 입니다."
*/ 

let year = 1982;
switch(year%12) {
    case 0 : console.log(`${year}년도의 태생은 원숭이띠 입니다.`); break;
    case 1 : console.log(`${year}년도의 태생은 닭띠 입니다.`); break;
    case 2 : console.log(`${year}년도의 태생은 개띠 입니다.`); break;
    case 3 : console.log(`${year}년도의 태생은 돼지띠 입니다.`); break;
    case 4 : console.log(`${year}년도의 태생은 쥐띠 입니다.`); break;
    case 5 : console.log(`${year}년도의 태생은 소띠 입니다.`); break;
    case 6 : console.log(`${year}년도의 태생은 호랑이띠 입니다.`); break;
    case 7 : console.log(`${year}년도의 태생은 토끼띠 입니다.`); break;
    case 8 : console.log(`${year}년도의 태생은 용띠 입니다.`); break;
    case 9 : console.log(`${year}년도의 태생은 뱀띠 입니다.`); break;
    case 10 : console.log(`${year}년도의 태생은 말띠 입니다.`); break;
             console.log(`${year}년도의 태생은 양띠 입니다.`); break; }


let year1 = 1982;
let animal = '';
    switch(year1%12) {
        case 0 : animal = '원숭이'; break;
        case 1 : animal = '닭'; break;
        case 2 : animal = '개'; break;
        case 3 : animal = '돼지'; break;
        case 4 : animal = '쥐'; break;
        case 5 : animal = '소'; break;
        case 6 : animal = '호랑이'; break;
        case 7 : animal = '토끼'; break;
        case 8 : animal = '용'; break;
        case 9 : animal = '뱀'; break;
        case 10 : animal = '말'; break;
        animal = '양'; break; }
        console.log(`${year1}년도의 태생은 ${animal}띠 입니다.`);


        let year2 = 1987;             
        let animal2 = ['원숭이','닭','개','돼지','쥐', '소','호랑이', '토끼', '용', '뱀', '말', '양'];
        year3=year2%12;
        console.log(`${year2}년도의 태생은 ${animal2[year3]}띠 입니다.`);