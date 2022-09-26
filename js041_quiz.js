//js041_quiz.js


//2022-9-26- 17:32:36
function clk() {
    let today = new Date();
    //let pb = document.getElementsByID('pa');
    let date1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+
    ' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    //console.log(date1);
    //document.getElementById('pa').innerHTML = `${date1}`;
    pa.innerHTML = date1;
    //p.document.write(`${date1}`);

}

/*
document.btn.onsubmit = () => {

    let date = new Date();
    console.log(date);

};

/*
let btn = document.getElementsByTagName('button')[0];
btn.onclick = process;

function process(){
    let divNode = document.getElementsByTagName('div');

} */
