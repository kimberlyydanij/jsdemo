/* console.log('Hello');
let data = document.getElementById('wrap');
console.log(data.innerText);   */


let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];
test(arr);
var threeLength, threeSum = 0; 

function test(arr){
    for(var i in arr){
        if(arr[i] % 3 == 0){
            threeLength +=1;
            threeSum += arr[i]
        }
    }
    console.log(threeLength);
    console.log(threeSum);
}

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];
var threeLength =0, threeSum = 0; 
test(arr);


function test(arr){
    for(var i in arr){
        if(arr[i] % 3 == 0){
            threeLength = threeLength + 1;
            threeSum += arr[i]
        }
    }
    console.log(threeLength);
    console.log(threeSum);
}
