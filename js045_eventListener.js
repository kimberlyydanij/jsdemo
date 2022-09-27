//js045_eventListener.js

/*
btn.onclick = () => {
    alert('click');
};

btn.onclick = () => {
    alert('click2');
};
*/

function click1(){
    alert('click1');
}

function click2(){
    alert('click2');
}

//btn.eventListener('이벤트',함수, 이벤트 전파)
//이벤트전파 => true : capturing, false : bubbling
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);