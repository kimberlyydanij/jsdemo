//js042_quiz.js

let totalCar = document.getElementById("total");
let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); // odeList

//NodeList를 Array로 변환
let myChb = [...chbCnt];

//checkbox에 onclick 이벤트가 발생되었을 때 수행될 carCount()를 등록
myChb.map((element) => {
   // console.log(this); //window
    element.onclick = carCount; //엘리먼트에 클릭 이벤트가 발생시 함수 호출
})

let basicCar = 0;
function carCount() {
    //this는 현재 이벤트가 발생된 checkbox객체를 나타냄
// console.log(this);
//console.log(this.id);
 
 //*defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다 
basicCar = Number(totalCar.defaultValue);
myChb.map((element)=> {
if(element.checked) basicCar += Number(element.value);}
);

totalCar.value = basicCar;

}