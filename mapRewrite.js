// Declare an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];


//Rewrite Array map() method - not override.
Array.prototype.mapRewrite = function(cb){
  let newArr = [];
  // Iterate through each element
  for ( let i = 0; i < this.length; i++){
    // With each element, involk callback function and pass each element as a parameter
    newArr.push(cb(this[i]));
  }
  return newArr;
}



//Test my rewrite map() method
let arr3 = arr1.mapRewrite( doSomething);
function doSomething(item){
  return item * 2;
}
//Checking result
console.log(arr3); // [2,4,6,8,10,12,14,16,18,20]