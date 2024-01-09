// 3 == '3' retorna true porque JavaScript faz a conversão de tipo de string para número. 3 === '3' retorna false porque os tipos são diferentes e não é feita a conversão de tipo.

// Observação: em JavaScript, você pode determinar o tipo de uma variável ou de um valor, com o operador typeof, como vemos a seguir:

// console.log(typeof 3)
// console.log(typeof '3')

// Configuração
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");