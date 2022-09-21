//js023_function.js
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions

//함수(funtion) : 특정 기능을 하는 구문을 독립된 부품으로 만들어 재 사용하고자 할 때 사용하는 문법이다.

/*
함수정의
(1) 함수 선언문
funtion 함수명(매개변수) {
    실행문;
    return 값;
}
(2) 함수 표현식
let test = funtion(매개변수) {
    실행문;
    return 값;
}  */

let year=2012;
let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
let yearData = leapYearCheck ? '윤년' : '평년'
if (leapYearCheck) {
    console.log(`${year}년도는 ${yearData}입니다.`);
}

function isLeapYear(year){
    let check;
    if ((year % 4 == 0 && year % 100 != 0)  || year % 400 == 0) {
        check = true;
    } else {
        check = false;
    }
    return check;
}
//함수 호출
year = 2015;
let result = isLeapYear(year);
console.log(result);
if (result) {
    console.log(`${year}은 윤년입니다.`);
} else {
    console.log(`${year}은 평년입니다.`);
}

//함수 정의
function add(a,b){
    return a+b; }

function add2(a,b,c) {
    return a+b+c;
}
//함수 호출
console.log(add(2,3)); //5
console.log(add2(2,3,4)); //9
console.log(add()); //NaN
console.log(add(1)); //Nan
console.log(add(1,2,3,4,5));