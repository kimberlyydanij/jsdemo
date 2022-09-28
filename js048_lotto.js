//1. 6개의 난수를 구하고 중복체크

let lotto = [];
for(let i=0; i<=5; i++){
    //*0.0 이상 ~ 1.0 미만 
    let ran = Math.random()*45;
    //console.log(ran);
    // 1이상~45까지 
    ran = Math.floor(ran) +1;
    //console.log(ran);
    lotto.push(ran);

for(j=0; j<1; j++){
    if(lotto[j]==lotto[i]) {
        i--;
        break;
    }
}
}

//2. 정렬

lotto.sort((a,b) => {
    return a - b;
});


//3. 출력
//colsole.log(lotto);
let divList = documnet.querySelectorAll('div.wrap div');
divList.forEach((element,idx) => {
    element.innerText =lotto[idx];
});