/*
Problem Statement:
Tenemos una función que recibe un entero y devuelve un entero
    Foo(0) -> 0 
    Foo(1) -> 1 
    Foo(n) -> Foo(n-1) + Foo(n-2)

    0 1 2 3 4 5 6 7  8  9  10 11 // Entradas
    0 1 1 2 3 5 8 13 21 34 55 89 // Salidas

    No usar recursividad porque tiene complejidad algoritmica exponencial
    (2^n) y se puede hacer con complejidad lineal (n).
*/
// Solution:
//No usar recursividad
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Prueba la función
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13
console.log(fibonacci(8)); // 21
console.log(fibonacci(9)); // 34
console.log(fibonacci(10)); // 55
