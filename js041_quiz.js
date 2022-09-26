//js041_quiz.js

//2022-9-26- 17:32:36
function clk() {
    let today = new Date();
    let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+
    ' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    pa.innerHTML = date1;
}
