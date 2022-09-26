//js038_dom.js

let pNode = document.getElementById('wrap');
//1 p null
console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodeValue}`);

let pAttr = pNode.attributes;
//NamedNodeMap {0: id, 1: class, id: id, class: class, length: 2}

console.log(pAttr);
console.log(pAttr[0]);