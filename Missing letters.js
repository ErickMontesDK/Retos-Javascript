/*Find the missing letter in the passed letter range and return it.*/

function fearNotLetter(str) {
    let strArr=str.split("");
    let gate=true;
    let charcode="";
    
    for(let i=0;i<strArr.length;i++){
    
       if(str.charCodeAt(i)+1===str.charCodeAt(i+1)){
         gate=false;
         
       }else if(str.charCodeAt(i)<122){
         charcode=String.fromCharCode(str.charCodeAt(i)+1);
         gate=true;
         i=str.length;
       }
     }
    
    console.log(gate==true?`Falta la letra ${charcode}`:"No falta ninguna letra");
  }
  
  fearNotLetter("abce");
  fearNotLetter("abcdefghjklmno");
  fearNotLetter("stvwx");
  fearNotLetter("bcdf");
  fearNotLetter("abcdefghijklmnopqrstuvwxyz");