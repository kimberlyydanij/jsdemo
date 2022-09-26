//js035_dom.js
let myNode=document.getElementById('p2');

//parentNode
let ptNode = myNode.parentNode;
console.log(ptNode);
//parentNode:[object HTMLBodyElement]
console.log(`parentNode:${ptNode}`);

ptNode.style.color="blue";

let prevNode = myNode.previousSibling;
// prevNode:[object Text]
console.log(`prevNode:${prevNode}`);
prevNode = prevNode.previousSibling;
// prevNode:[object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);


////////////////////
//nextSibling
let nextNode = myNode.nextSibling;
//nextNode:[object Text]
console.log(`nextNode:${nextNode}`);

nextnode = nextNode.nextSibling;
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

////////////////////////
//
let prevEleNode = myNode.previousElementSibling;
//prevEleNode:[object HTMLParagraphElement], content1
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

////////////////////////
//nextElementSibling
let nextEleNode = myNode.nextElementSibling;
//nextEleNode:[object HTMLParagraphElement], content3
console.log(`nextEleNode:${nextEleNode}, ${nextEleNode.innerText}`);

/////////////////////////
//childNodes

let divNode = document.getElementById('wrap');
//divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//divChildesNode:[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);
//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildesNode);

///////////////////////
//children
let divChildren = divNode.children;
//divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);
//HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);
//<p id='p1'>content1</p>
console.log(divChildren[0]);
//<p id='p1'>content1</p>
console.log(divChildren.item(0));
//null
console.log(divChildren.namedItem(0));

let pNode=document.getElementById('p4');
let aNode=pNode.firstChild;
console.log(aNode); //#text
aNode = pNode.firstElementChild;
// <img src='images/gosu.jpg' alt='영화배우 고수'>
console.log(aNode);


////////////////////////
//getAttribute("속성명"),SetAttribute("속성명","값")
//객체.속성명, 객체.속성명="값"
let aAttrNode = aNode.getAttribute('src');
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute('title','스타배우');
//스타배우
console.log(aNode.getAttribute('title'));

aNode.id="imgGosu";
//imgGosu
console.log(aNode.id);

