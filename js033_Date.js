//js033_Date.js

let date = new Date();
//2022-09-26T01:11:01.481Z
console.log(date);

console.log(date.getFullYear()); //2022
console.log(date.getMonth()+1); // 9, 0부터 시작하기 때문에 +1을 해줘야 한다.
console.log(date.getDate()); // 26
console.log(date.getDay()); //1, 요일 0일요일 6토요일