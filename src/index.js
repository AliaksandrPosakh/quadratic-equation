module.exports = function solveEquation(equation) {
  console.log('test message');
  equation = equation.replace(/\ /g, '');
  console.log('equation',equation);
    const arr = equation.split('*x^2');
    const solutions = [];
let a = arr[0];
a = parseInt(a);

const str = arr[1];
//console.log('arr',arr);

const arr2 = str.split('*x');
let b;
let c;
if (arr2.length == 1) {
    b = 0;
    c = arr2[0];   
}
else { 
  b = arr2[0];
  c = arr2[1];
}
c = +c;
b = +b;

const discriminant = Math.pow(b,2) - (4 * a * c);

let x1 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));
let x2 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
solutions.push(x2);
solutions.push(x1);

return solutions.sort((a,b) => a-b);  
}
