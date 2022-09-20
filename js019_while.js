//js019_while.js

/* 
while(조건식) {
    실행문;
}
*/

console.log('====================')
let j=1;
while(j<=5) {
    console.log(j);
    j++;
}

/*   적어도 한번은 실행함
do {
    실행문;
}
while(조건식);
*/   

let input='n';
do {
    console.log('고객님 주문 하시겠습니까?(y/n)');
    input = prompt('입력');
} while (input =='y');