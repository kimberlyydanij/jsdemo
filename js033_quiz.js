//js033_문제풀이.js
/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/
console.log("문제 1: 합계와 평균을 계산")
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let sum = 0;
let avg = 0;
const newArr = arr.filter((element, i) => element !== undefined); 
function sumAvg(data) {
  for(i=0;i<data.length;i++)
  sum += data[i]
  avg = sum / data.length;
  console.log(`합계: ${sum}, 평균: ${avg}`);
}
sumAvg(newArr);


/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67' ],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/

console.log("문제 2: 2차원 배열의 데이터를 이용해서 합계와 평균을 계산")

function jumsu(data) {
  let max = [];
  for(i=0;i<data.length;i++) {
    let sum1=0;
    let lt=0;
    for(j=1;j<data[i].length;j++) {
      sum1 = sum1 + data[i][j];
      lt = data[i].length;
      }
      lt = lt-1;
      data[i].push(sum1);
      sum1 = sum1/lt;
      sum1 = sum1.toFixed(2);
      data[i].push(sum1);
      console.log(data[i]);
      max[i] = sum1;
      }
      console.log(`최고점: ${ Math.max.apply(null,max)}`);
} 
jumsu([['홍길동', 90, 85, 40], ['이영희', 100, 35, 75]]);
