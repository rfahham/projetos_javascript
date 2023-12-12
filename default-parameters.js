const greet = (nome = 'Guest') => {
    return `Hello, ${nome}!`;
};

console.log(greet());

console.log(greet('Ricardo'));