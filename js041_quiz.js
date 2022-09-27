//js041_quiz.js

//2022-9-26- 17:32:36
function clk() {
    let today = new Date();
    let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+
    ' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    pa.innerHTML = date1;
}

/*

let dateBtnNode = document.getElementsByTagName('button')[0];
dateBtnNode.onclick = () => {
    let pNode = document.getElementsByTagName('p')[0];

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();

    pNode.innertext = `${year}-${month}-${date} ${hour}:${minite}:${second}`;
}; */