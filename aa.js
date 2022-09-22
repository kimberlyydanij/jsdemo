
  /*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */
  
  let alpa = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

  //alpa배열의 요소를  reverse한 후 리턴하는 함수 정의
  function reverse(alpa) {
    let data = [];
    for(let i=alpa.length -1;i>=0; i--){
        data[data.length]=alpa[i];
    }
    return data;
  }

  //data배열의 출력하는  함수 정의
  function display(data) {
    for(let i=0; i<data.length; i++) {
    process.stdout.write(data[i]); }
    process.stdout.write('\n');
  }
  display(alpa);
  display(reverse(alpa));
  display(alpa);
