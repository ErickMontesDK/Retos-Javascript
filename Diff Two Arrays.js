/*Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.*/

function check(arr1,arr2){
    const arrNew=arr1.filter(elem=>arr2.some(val=>val==elem)?false:true)
    return arrNew;
  };
  
function diffArray(arr1, arr2) {
    const newArr = check(arr1,arr2).concat(check(arr2,arr1))
    return newArr;
  };
  
  let test1=diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  let test2=diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

  console.log(test1);
  console.log(test2);