//js_027_Strings

let data = 'It`s alrigt';
console.log(data);

//length : 문자열의 길이
console.log(data.length);

/*특정범위 데이터를 리턴해주는 3가지 메소드
1. substing(start,end);
2. substr(start, end);
3. slicE(start, end);
*/

data = 'Apple, Banana, Kiwi';
//Banana
console.log(`subsgring: ${data.substring(7,13)}`); //7인덱스부터 13인덱스 미만
console.log(`subsgring: ${data.substring(-12,-6)}`); // 음수값 지원 안함

console.log(`substr: ${data.substr(7,6)}`); //Banana
console.log(`substr: ${data.substr(-12,6)}`); //Banana

console.log(`slice: ${data.slice(7,13)}`); //Banana
console.log(`slice: ${data.slice(-12,-6)}`); //Banana

//replace('찾을 문자열|RegExp','바꿀 문자열')
//i : 대소문자 구별 안함, g: 모든 문자열
console.log(`replace: ${data.replace('Banana','Grape')}`); //replace: Apple, Grape, Kiwi
console.log(data); //Apple, Banana, Kiwi Sting은 불변이라 변하지 않음.


//정규표현식

data = 'Mr Blue has a blue house and a blue car';
//Mr Blue has a red house and a blue car
console.log(data.replace(/blue/,'red')); //대소문자 구별해서 첫번째만
//Mr red has a blue house and a blue car
console.log(data.replace(/blue/i,'red')); //대소문자 구별없이 첫번째만
//Mr Blue has a red house and a red car
console.log(data.replace(/blue/g,'red')); //대소문자구별해서 모두
//Mr red has a red house and a red car
console.log(data.replace(/blue/ig,'red')); //대소문자 구별없이 모두

data = 'Hello World';
console.log(`toUpperCase(): ${data.toUpperCase()}` ); //toUpperCase(): HELLO WORLD
console.log(`toLowerCase(): ${data.toLowerCase()}` ); //toLowerCase(): hello world

let data2 = 'javascript';
console.log(`concat() : ${data.concat(data2)}`); //concat() : Hello Worldjavascript
console.log(`concat() : ${data.concat(' ',data2)}`); //concat() : Hello World javascript

console.log(`charAt() : ${data.charAt(0)}`); //H
console.log(`charCodeAt() : ${data.charCodeAt(0)}`); //72 유니코드 값 가져오기

data = 'a,b,c,d,e';
let arr = data.split(',');  //split():문자열을 나누어 준다
for (let i of arr) console.log(i);


//match(): 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 
//배열로 리턴하고 일치하는 문자열이 없으면 
data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);
//match() : blue,blue object true
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
//match() : null object false
console.log(`match() : ${res} ${typeof res} ${res instanceof Array}`);

//search() : 검색데이터와 일치하는 문자열이 있으면 처음의 index를 리턴하고
//일치하는 문자열이 없으면 -1을 리턴한다.
res = data.search(/blue/g);
console.log(`search(): ${res}`); //search(): 14

res = data.search(/white/g);
console.log(`search(): ${res}`); //search(): -1

//indexOf(): 문자열의 인덱스를 리턴
console.log(data.indexOf('M')); //O
console.log(data.indexOf('B')); //3

let position = data.indexOf('blue');
console.log(data.indexOf('blue', position +1)); //31 두번째 블루의 인덱스

data = 'Mr Blue has a blue house and a blue car'; /*
do{
    let position = data.indexOf('blue');
    console.log(position);
} while(position != -1); */

let pos = -1;
do {
    pos = pos + 1;
    pos = data.indexOf('blue',pos);
    if (pos != -1) console.log(pos);
} while (pos != -1); 

let pos1 = 0
for(i=0;i<data.length;i++)
{   pos1 = pos1 + 1;
    pos1 = data.indexOf('blue',pos1)
    if (pos1 == -1) break;
    console.log(pos1);
} 

//repeat;
let text = 'korea';
console.log(text.repeat(10));
text="*";
console.log(text.repeat(10));

let text2 = '  korea  data   ';
console.log(text2.length); // 16
console.log(text2.trim().length);  //11 trim 양사이드  공백 제거
