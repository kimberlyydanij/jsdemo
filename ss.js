<script>  

let btn;
let a;
document.getElementById('btn1').addEventListener('click',num);
    
function num() {

    random();
    print();


  function random() {  
  let ran = []; 
  console.log(ran);

  for(i=0;i<=5;i++) {
    ran[i] =  Math.round(Math.random() * 100 /2.22);
    a = [...ran];
    console.log(a);
    } 
    ran.sort();

}; }

function print() {
let b = document.getElementsByClassName(num);
console.log(b);
}

   /*
   for(j=1;j<=6;j++) {
   document.write(ran[j])
 }; } */
 
</script>