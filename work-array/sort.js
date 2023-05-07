const data = ["ALPHA","JULIET","TANGO","UNIFORM","KILO","LIMA","GOLF","HOTEL","DELTA","MIKE","PAPA","ZULU","CHARLIE","X-RAY","FOXTROT","VICTOR","NOVEMBER","ROMEU","QUEBEC","INDIA","BRAVO","WHISKEY","ECO","SIERRA","OSCAR","YANKEE"]

// Organizando um array modificando o array original
const sortedData1 = data.sort((a,b) => a.localeCompare(b))

console.log(data);
console.log(sortedData1)

// Organizando um array som modifficar o array original
// const sortedData2 = [...data].sort((a,b) => a.localeCompare(b))
// console.log(data);
// console.log(sortedData2)

// node sort.js