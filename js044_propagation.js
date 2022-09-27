//js044_propagation.js

document.querySelector('.red').onclick = (e) => {
    alert('red');
};
document.querySelector('.green').onclick = (e) => {
    alert('green');
    e.stopPropagation(); //전파 차단
};

document.querySelector('.blue').onclick = (e) => {
    alert('blue');
    console.log(e);
    e.stopPropagation(); //전파 차단
    // return false; jQueary에서 사용 가능
};

document.querySelector('a').onclick = (e) => {
    alert('안녕하세요');
    //e.preventDefault();
    return false;
};

/*
[1] Event Propagation(이벤트 전파)
1) 캡쳐링 (capturing phase) : 부모요소에서 Target요소로 이벤트가 전파
2) 버블링 (bubbling phase) : Target요소에서 부모요소로 전파가 이뤄짐

[2] 이벤트 차단
stopPropagation()

[3] stopPropagation()과 preventDefault()비교
    stopPropagation() : 이벤트 전파 차단 return false(jQuery)
    preventDefault() : 디폴트 이벤트 차단  return false(javascript, jQuery)

*/