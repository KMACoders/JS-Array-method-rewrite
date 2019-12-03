//Declare an array
let arr1 = ['Hung', 'Tuan', 'Hieu', 'Nam'];

//This optional parameter indicates a string of characters to separate each element of the array
//Default, if we don't pass any parameter to funtion, separator is comma.
Array.prototype.joinRewrite = function(separator=','){
  // Declare new string
  let newStr='';
  //Iterate through each element, and concat. 
  for ( let i = 0; i < this.length; i++){
    //No separator behind the last element !
    if (i == this.length - 1 ){
      newStr += this[i]; 
    } else {
      newStr += this[i] + separator;
    }
  }
  //After concat all elements in array, we will return a newString.
  return newStr;
}

//Test my rewrite join(). 
//Separator is empty string.
let str = arr1.joinRewrite('');
console.log(str); //"HungTuanHieuNam" 
