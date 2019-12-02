//Declare an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];

//Rewrite Array find() method - not override
Array.prototype.findRewrite = function(cb){
  let newArr = [];
  //Iterate through each element
  for ( let i = 0 ; i < this.length ; i++){
    //With each element, check condition in callback funtion
    if (cb(this[i])){
      newArr.push(this[i]);
      //if callback funtion return true, break out. 
      // ... because we just get first element.
      break;
    }
  }
  return newArr;
};

// Test my rewrite find() method.
arr2 = arr1.findRewrite(callback);
function callback(item){
  return item > 5;
}
//Checking result
console.log(arr2); //6

