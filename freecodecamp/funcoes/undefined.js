// Uma função pode incluir a instrução return mas ela não precisa fazer isso. No caso de uma função não ter uma instrução return, quando você a chamar, a função processa o código interno, mas o valor retornado é undefined.

// Configuração
let sum = 0;

function addThree() {
  sum = sum + 3;
  console.log(sum)

}

function addFive() {
  sum = sum + 5;
  console.log(sum)
}

addThree();
addFive();

// Out
// 3
// 8