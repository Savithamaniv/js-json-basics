let x;
// Length of the string by function
function strleng(x){
    return (x.length);
}
console.log('String lenth');
console.log(strleng('Mahendran'));

//Function returns the largest number
console.log('Largest number');
let num1;
let num2;
function findlarnum(num1,num2)
{
    if (num1 > num2)
    {console.log('Number 1 is Larger')}
    else
    {console.log('Number 2 is Larger')}
}
//return findlarnum(50,100);

console.log(findlarnum(50,100));
let bo1;

function isboolean(bo1) {
    if (bo1>5000 && bo1 < 9999) {
      return "true";
    } else {
      return "false";
    }
  } 
  console.log('Checking boolean value');
console.log(isboolean(6000));
console.log(isboolean(2000));
  
  let cubrt = Math.cbrt(125);
  console.log(cubrt);
