const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(a,b){
  let modifiedFood = [] ;
  for(let sus = a; sus<b-1;sus++){

    modifiedFood.push(foods[sus]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}

// Progression 3:
function isEven(number){
  return number%2==0?true:false;
}
function isPrime(number){
  if(number==1){
    return false;
  } else if(number===2){
    return true;
  } else {
    for(var j=2; j<number; j++){
      if(number%j===0){
        return false;
      }
    }
    return true;
  }
}

function checkNumber(numberArray,operation){
  newArray = numberArray.filter(operation);
  return newArray;
}

// Progression 4:
function reject(numberArray){
  num = [];
  numberArray.forEach(number=>{
    if (isPrime(number)){
      return 0
    } else {
      num.push(number);
    }
  })
  return num;
}
 function nonPrime(numberArray){
   x = reject(numberArray);
   return x;
  }

// Progression 5:
let isEvenUsingLambda = number => number%2==0;

// Progression 6:
function mp(number){
  return number*number;
}
function findSquareOfNumbers(myArray){
  let sqy = myArray.map(mp);
  return sqy;
}
// Progression 7:
function multiply(myArray){
  return myArray.reduce((mt,number)=>{
    return mt*number;
  },1);
}
function sumOfSquares(myArray){
  return myArray.map(mp).reduce((sum,number)=>{
    return sum+number;
  },0);
}