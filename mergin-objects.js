const object1 = {a:1, b:2}
const object2 = {c:3, d:4}
const object3 = {e:5, f:6}

const mergeobject = {...object1, ...object2, ...object3,}

console.log(mergeobject)