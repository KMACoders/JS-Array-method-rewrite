//Declare an array
let arr1 = [1,2,3,4,5,6,7,8,9,10];

//Rewrite Array filter() method - not override
Array.prototype.filterRewrite = function(cb){
  let newArr = [];
  //Iterate through each elemnent
  for ( let i = 0; i < this.length; i++){
    //Callback will return true, or false.
    //... if callback return true, we push this element to the newArr[];
    if(cb(this[i])){
      newArr.push(this[i]);
    }
  }
  return newArr;
}

//Test my rewrite filter() method.
let arr2 = arr1.filterRewrite(callback);
function callback(item){
  return item % 2 == 0;
}
//Checking result
console.log(arr2); // [2,4,6,8,10]


