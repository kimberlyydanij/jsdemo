//js034_dom.js

/*  옛날방식 
window.onload = function() {
   let nNode = document.getElementById('selector');
            console.log(nNode); } */

let hNode = document.getElementById('selector');
console.log(hNode, typeof hNode);

let hId = document.querySelector('#selector');
console.log(hId,  typeof hId);

let hClass = document.querySelector('.choice');
console.log(hClass,  typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName('p');
console.log(pNode,  typeof pNode);
console.log(pNode.length); //4
console.log(pNode[0], pNode.item(0)); 
console.log(pNode[0].innerText);
pNode[0].style.backgroundcolor = 'yellow';

function process(){
    alert('dd');
    let fname = document.frm.fname;
    console.log('fname :',fname);
    console.log(fname.value);
    console.log(fname.defaultVale);
    return false;
}