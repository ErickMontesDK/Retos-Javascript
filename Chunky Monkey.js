/*Write a function that splits an array (first argument) into groups the length 
of size (second argument) and returns them as a two-dimensional array.*/ 

function chunkArrayInGroups(arr, size) {
    let newArray=[]
    let sobra=arr.length%size
    
    for(let i=0; i<arr.length; i+=size){
          let array1=[arr[i]];
      
      for(let j=1; j<size; j++){
        
        if(j+i<arr.length){
          let array2=[arr[j+i]];
            array1=array1.concat(array2);
        }
        }
      newArray.push(array1);
    }
    return newArray;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));