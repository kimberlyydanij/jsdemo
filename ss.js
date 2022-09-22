let arr = [1,2,3];

function sample(arr) {
    console.log('sample', arr);
}

function test(aa) {
    aa(arr);
}
test(sample);