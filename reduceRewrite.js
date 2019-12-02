//Declare an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];

//Rewrite Array filter() method - not override
Array.prototype.reduceRewrite = function(cb){
  let newArr = [];
  // Delare a variable called sumAllElements. 
  let sumAllElements = 0;
  //Iterate through each element.
  for ( let i = 0 ; i < this.length ; i++){
    //For each loop, sumAllElements will equal "the sum of the preceding elements" + "the next element of the array".
    // In loop 1 : sumAllElements = sumAllElements + this[1] = 0 + 1 = 1
    // In loop 2 : sumAllElements = sumAllElements + this[2] = 1 + 2 = 3
    // In loop 3 : sumAllElements = sumAllElements + this[3] = 3 + 3 = 6
    //...
    // Last : sumAllElements = sumAllElements + this[9] = 45 + 10 = 55
    sumAllElements = cb(sumAllElements, this[i]);
  }
  newArr.push(sumAllElements);
  return newArr;
}

//Test my rewrite reduce() method.
let arr2 = arr1.reduceRewrite(callback);
function callback(item1, item2){
  return item1 + item2;
}

//Checking result
console.log(arr2); // 55
