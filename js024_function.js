//js024_function.js

/* [출력결과]
홍길동님은 회원입니다.
3000포인트가 적립되었습니다. */

//회원여부
function process(name,chk) {
    if(chk) {
        console.log(`${name}님은 회원입니다.`);
    } else {
        console.log(`${name}님은 비회원입니다.`);
    }
}
 //포인트적립
function pointPlus(point){
    console.log(`${point}포인트가 적립 되었습니다.`);
}

process('홍길동',true);
pointPlus(3000);

/////////////////
/* [출력결과]
요소의 길이 : 4
2 인덱스 요소값 가져오기 : v
*/

// 배열의 길이 리턴
function length(data) {
 return data.length;
}

// 배열에서 특정 인덱스의 요소 리턴\
function charAt(data, index) {
    return data[index];
}

let charAt = (data, index) => {
    return data[index];
}

let arr = ['j', 'a', 'v', 'A'];
console.log(`요소의 길이 : ${length(arr)}`);
console.log(`2인덱스 요소값 가져오기 : ${charAt(arr, 2)}`);
console.log(`대문자 갯수 : ${upperCnt(arr)}`);

// 배열에서 대문자 갯수를 리턴
function upperCnt(data) {
    let sum = 0;
    for(i=0; i<=data.length; i++) {
        if(data[i] >= 'A' && data[i] <= 'Z')
          sum++
    }
    console.log(`대문자의 갯수는 ${sum}개 입니다.`);
    return sum;
}
upperCnt('Good Morning Everyone');

let upperCnt = (data) => {
    let sum = 0;
    for(i=0; i<=data.length; i++) {
        if(data[i] >= 'A' && data[i] <= 'Z')
          sum++
    }
    console.log(`대문자의 갯수는 ${sum}개 입니다.`);
    return sum;
}
upperCnt('Good Morning Everyone');