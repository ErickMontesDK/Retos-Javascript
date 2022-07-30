/*Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.*/

function diffArray(arr1, arr2) {
    const newArr = [];
  
    let arrnew=arr1.filter(elem=>arr2.some(val=>val==elem)?false:true).concat(arr2.filter(elem=>arr1.some(val=>val==elem)?false:true));
    return arrnew;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);