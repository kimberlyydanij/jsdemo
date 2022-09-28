/*
let hour = new Date();
let minute = new Date();
let second = new Date();
hour = hour.getHours();
minute = minute.getMinutes();
second = second.getSeconds();

console.log(hour);
console.log(minute);
console.log(second);

let time_box = document.getElementsByClassName('time_box');
console.log(time_box);
console.log(`${hour} : ${minute} ${second}`);
function display() {
time_box.innerText = (`${hour} : ${minute}`);
// document.getElementsByClassName('time_box').innerText = (`${hour} : ${minute}`);
}

setTimeout(display, 1000); */
function leftPad(num) {
    if(num<10) {
        return `0${num}`
    }
    return `${num}`;
}

function setText(selector, text){
    let targetElement = document.querySelector(selector);
    targetElement.innerText = text;
}

let watchTime = () => {
const present = new Date();
const dayList = ['일', '월', '화', '수', '목', '금', '토', '일'];

const hour = leftPad(present.getHours());
const minute = leftPad(present.getMinutes());
const second = leftPad(present.getSeconds());

console.log(`${hour}-${minute}-${second}`);

setText('#hours', hour);
setText('#minutes', minute);
setText('#seconds', second);

const year = present.getFullYear();
const month = leftPad(present.getMonth()+1);
const date = leftPad(present.getDate());
const day = present.getDay();   

setText('#year', year);
setText('#month', month);
setText('#date', date);
setText('#day', `${dayList[day]}요일`);

}

watchTime();
let clockInterval = setInterval(watchTime, 1000);

/* 
setTimeout(실행함수, 시간) : 일정한 시간이 지난 후 한번만 실행함
setInterval(실행함수, 시간) : 일정 시간 간격을 두고 반복 실행함
*/
