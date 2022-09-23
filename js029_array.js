// js029_array.js

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango' ]
let data = fruits.toString();
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join('*')); //Banana*Orange*Apple*Mango

//배열의 끝에 요소 추가
fruits[4] = 'Kiwi';
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
console.log(fruits.push('Melon')); //6
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi', 'Melon' ]

//배열의 끝에 요소를 제거
console.log(fruits.pop());  //Melon;
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열의 앞에 요소를 추가
console.log(fruits.unshift('Melon')); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//배열의 앞에 요소를 제거
console.log(fruits.shift()); //Melon
console.log(fruits); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

console.log(fruits.slice(1,3)); // [ 'Orange', 'Apple' ]
console.log(fruits);  //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]
console.log(fruits.slice(1)); // [ 'Orange', 'Apple', <1 empty item>, 'Kiwi' ]

//오름차순 정렬
console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Kiwi', 'Orange', <1 empty item> ]\

//내림차순 정렬
console.log(fruits.sort().reverse()); //[ <1 empty item>, 'Orange', 'Kiwi', 'Banana', 'Apple' ]


//Javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertation sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 http://d2.naver.com/helloworld/0315536
let point = [40, 100, 1, 5, 10];

console.log(point.sort()); //[ 1, 10, 100, 40, 5 ]
//오름차순
console.log(
    point.sort(function (a, b) {
        console.log(`a:${a}, b:${b}, a-b:${a-b}`);
        return a-b; //[ 1, 5, 10, 40, 100 ]
    }));
//내림차순
console.log(
    point.sort(function (a, b) {
        console.log(`a:${a}, b:${b}, a-b:${a-b}`);
        return b-a;  //[ 100, 40, 10, 5, 1 ]
    }));

    let xData = [1,2,3];
    let yData = [4,5,6];
    let zData = xData.concat(yData, [7,8,9]);
    console.log(zData.length); // 9
    console.log(zData); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    let arr2 = [1,3, [[[4,5]]], [7,8], [[9,10]], 12]; 
    console.log(arr2.flat()); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, [ 9, 10 ], 12 ]
    console.log(arr2); // [ 1, 3, [ [ [Array] ] ], [ 7, 8 ], [ [ 9, 10 ] ], 12 ]
    console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, [ 9, 10 ], 12 ]
    console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ], 7, 8, 9, 10, 12 ]
    console.log(arr2.flat(3)); //[ 1, 3,  4,  5, 7,8, 9, 10, 12 ]      
