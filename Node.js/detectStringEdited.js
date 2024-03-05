/*
Problem Statement:
Hay tres tipos de ediciones que se pueden hacer en un string: insertar un caracter, borrar un caracter 
o reemplazar un caracter. 
Dados dos strings, escriba una función que revise si hay cero o una edición y 
devuelva TRUE en ese caso. De lo contrario devuelve FALSE

EJEMPLOS: 
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bae -> false
plle, plrb -> false

*/
// Solution:
function isOneEditAway(str1, str2) {
  if (str1 === str2) return false;
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let i = 0;
  let j = 0;
  let count = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] !== str2[j]) {
      count++;
      if (str1.length > str2.length) {
        i++;
      } else if (str1.length < str2.length) {
        j++;
      } else {
        i++;
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return count <= 1;
}

// Prueba la función
console.log(isOneEditAway("pale", "ple")); // true
console.log(isOneEditAway("pales", "pale")); // true
console.log(isOneEditAway("pale", "bale")); // true
console.log(isOneEditAway("pale", "bae")); // false
console.log(isOneEditAway("plle", "plrb")); // false
