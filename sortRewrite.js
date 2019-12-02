//Declare an array
let arr1 = [1,5,2,4,7,2,3];

//Rewrite Array sort() method
Array.prototype.sortRewrite = function(){
  let newArr = [];
  let temp;
  //Copy first array ( arr1 ) to second array ( newArr)
  //In order not to affect arr1
  for (let i = 0; i < this.length; i++){
      newArr.push(this[i]);
    }
  //Use Selection Sort
  for ( let i = 0 ; i < newArr.length - 1 ; i++){
    for ( let j = i+1 ; j < newArr.length ; j++){
      if (newArr[i] > newArr[j]){
        temp = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = temp;
      }
    }
  }
  //Return second array ( newArr );
  return newArr;
};
//Test my rewrite method
//Checking result : arr1 and arr2. ( Don't change arr1).
console.log(arr1); //[1,5,2,4,7,2,3]
let arr2 = arr1.sortRewrite();
console.log(arr2); //[1,2,2,3,4,5,7]
