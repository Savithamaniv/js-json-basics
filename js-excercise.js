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
 // Function to find cube root 
 let cb1;
 let cubrt; 
function cuberoot(cb1){
     cubrt = Math.cbrt(cb1);
     console.log('Cube root is');
    console.log(cubrt);
}
  cuberoot(1000);
  //console.log(cuberoot(8));
  
  //Farenheit to Celsius
let tocel;
let fahrenheit;
function toCelsius(fahrenheit) {
 tocel= (5/9) * (fahrenheit-32)
  console.log('To celsius');
  console.log (tocel) ;
  }
  toCelsius(85);
let inches;
let Feet;

// Function to convert inches to Feet
function inchesToFeet(inches) {
console.log('Inches to Feet');
  console.log( Feet =  inches / 12);
}
inchesToFeet(72);
//Function return KG to pounds and Vice versa
let innum;
let ip;
function findkglbs(innum,ip){
  if (ip == "kgs"){
    retval = (innum * 2.2 );
    console.log(innum,ip,'=',retval,'lbs"');
  }
    else{
      retval = innum/2.2;
      console.log(innum,ip,'=',retval,'kgs"');
    }
  }
findkglbs(40,'lbs');
findkglbs(80,'kgs');
//Find the longest string in given
function longest_str_in_array(arra)
{ let max_str = arra[0]. length; 
  let ans = arra[0]; 
  for (let i = 1; i < arra. length; i++) 
  { const maxi = arra[i]. length; 
    if (maxi > max_str) 
    { ans = arra[i];
       max_str = maxi; 
      } } 
      console.log( ans); } 

    longest_str_in_array('Savithamani');