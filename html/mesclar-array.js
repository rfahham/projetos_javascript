const estudantes = ['steve', 'ana', 'thomas']
const novosEstudantes = ['fernanda', 'julia'];

const todosEstudantes = [... estudantes, ... novosEstudantes]

console.log(todosEstudantes)

console.table(todosEstudantes);

// node mesclar-array.js