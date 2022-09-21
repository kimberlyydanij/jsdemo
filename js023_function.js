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
}  

(3) 즉시실행(익명함수)
    (function(param)){
        console.log(`${param} run ~~~~ `);
    } ;  */


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
    console.log('=====');
    console.log(`a=${a}, b=${b}`)
    return a+b; }

function add2(a,b,c) {
    return a+b+c;
}
//함수 호출
console.log(add(2,3)); //5
console.log(add2(2,3,4)); //9
console.log(add()); //NaN (Not a number)
console.log(add(1)); //Nan
console.log(add(1, 'script'));// 1script
console.log(add(1, null)); //1
console.log(add(1,2,3,4,5)); //3

function hello(name) {
console.log(`${name}님 환영합니다.`);
}

hello(`홍길동`);
console.log(hello(`고수`)); //undefined


////////////////////////////////
//함수표현식


//ES5 - 익명함수
let sum = function(a,b){
    return a+b;
}
console.log(sum); //[Function: sum]
console.log(sum(10,20)); //30

let hap = function(a,b){
    console.log(a + b);
}
console.log(hap);  // [Function: hap]
console.log(hap(10,30)); // 40 undefined

// ES6 = 화살표 함수
let sub = (a,b) => {
    return a+b;
}
console.log(sub); //[Function: sub]
console.log(sub(3,5)); //8

let call = (a,b) => {
    console.log(a + b);
};
console.log(call); // [Function: call]
console.log(call(3,4)); // 7, undefined
call(3,4);  // 7


let call2 = (a) => a;
//parameter가 한개이면 소괄호()생략이 가능하다.
//return 하는 문장만 실행문에 있으면 중괄호{}와 return을 생략할 수 있다.

console.log(call2);  //[Function: call2]
console.log(call2(3)); //3

let call3 = () => console.log('로그인 해주세요.');

console.log(call3); //[Function: call3]
console.log(call3()); //undefined
call3(); //로그인 해주세요.

/////////////////////////////////
// 다양한 함수구조

// 중첩함수
function outer(a,b) {
    let result = inner(a,b);
    function inner(a,b) {
        return a + b;
    }
    return result;
}

console.log(outer(10,3)); //13