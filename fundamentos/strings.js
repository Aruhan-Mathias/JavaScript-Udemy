const escola = 'Cod3r';

console.log(escola.charAt(4)); //pega um caractere (X) dentro da string
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //retorna o código da tabela ASCII do caractere
console.log(escola.indexOf('3')); //procura o 3 e retorna o indice dele

console.log(escola.substring(1)); //retorna od3r
console.log(escola.substring(0, 3)); //retorna Cod

console.log('Escola '.concat(escola).concat('!')); //concatenando
console.log(escola.replace(3, 'e')); //substitui o índice 3 para 'e'

console.log('Ana, Maria, Pedro'.split());