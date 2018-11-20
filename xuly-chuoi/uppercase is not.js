function isFirstLetterUpperCase(str){
   let  regexp = /^[A-Z]/;

    if (regexp.test(str)) console.log("string's first character is uppercase.");
    else console.log ("string's first character is not uppercase");

}

isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
isFirstLetterUpperCase('Nguyen van Nam');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van Nam');