/*Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant 
cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */


function translatePigLatin(str) {
  let string=""
  let consonant=str.match(/^[^aeiou]+/gi);
  
  if(consonant!=null){
    let newStrArr=str.split("",);
    let NumberOfConsonants=consonant[0].length;
    string=newStrArr.splice(NumberOfConsonants,).concat(newStrArr.splice(0,NumberOfConsonants,)).join("")+"ay"
  }else{
    string=str+"way"
  }
  
  console.log(string);
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
translatePigLatin("california");
translatePigLatin("glove");