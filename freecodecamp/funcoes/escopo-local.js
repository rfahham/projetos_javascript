function myLocalScope() {
    // Altere apenas o código abaixo desta linha
  
    const myName = 'Ricardo'
  
    console.log('inside myLocalScope', myName);
  }
  myLocalScope();
  
    const myAge = 53
  
  // Executar e verificar o console
  // myVar não está definida fora do myLocalScope
  console.log('outside myLocalScope', myAge);