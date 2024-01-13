const pessoas = [ 
    { nome : "Ricardo", idade : 53 },
    { nome : "Alessandra", idade : 50 },
    { nome : "João Ricardo", idade : 24 },
    { nome : "João Victor", idade : 22 },
    { nome : "Andreza", idade : 18 }
];

// Função para encontrar a pessoa com a maior idade no array
function pessoaComMaiorIdade(arrayDePessoas) {
    if (arrayDePessoas.length === 0) {
      return null; // Retorna null se o array estiver vazio
    }
  
    // Inicializa a pessoa com o primeiro objeto no array
    let pessoaMaiorIdade = arrayDePessoas[0];
  
    // Itera sobre os objetos no array
    for (let i = 1; i < arrayDePessoas.length; i++) {
      const pessoaAtual = arrayDePessoas[i];
  
      // Verifica se a idade da pessoa atual é maior do que a idade da pessoa com a maior idade conhecida
      if (pessoaAtual.idade > pessoaMaiorIdade.idade) {
        pessoaMaiorIdade = pessoaAtual;
      }
    }
  
    return pessoaMaiorIdade;
  }
  
  // Chama a função e imprime o resultado
  const pessoaMaiorIdade = pessoaComMaiorIdade(pessoas);
  
  if (pessoaMaiorIdade) {
    console.log(`A pessoa com a maior idade é ${pessoaMaiorIdade.nome}, com ${pessoaMaiorIdade.idade} anos.`);
  } else {
    console.log('O array está vazio.');
  }