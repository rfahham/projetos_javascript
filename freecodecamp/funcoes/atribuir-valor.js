// Se você se lembrar de nossa discussão sobre como armazenar valores com o operador de atribuição, tudo à direita do sinal de igual é resolvido antes de o valor ser atribuído. Isso significa que podemos pegar o valor de retorno de uma função e atribuí-lo a uma variável.

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)

console.log('o novo valor da variável processed é:', processed)