let CopaDoBrasil = [
    { time: "Flamengo", campeao: true},
    { time: "Vasco", campeao: false},
    { time: "Fluminense", campeao: false},
]

let FoiCampeao2022 = CopaDoBrasil.filter((copa) => copa.campeao === true)

// let NaoFoicampeao2022 = CopaDoBrasil.filter((copa) => copa.campeao !== true)
let NaoFoicampeao2022 = CopaDoBrasil.filter((copa) => !copa.campeao)

console.log("Foi compeão em 2022")
console.log(FoiCampeao2022)
console.log("-----------------------")
console.log("Não foi compeão em 2022")
console.log(NaoFoicampeao2022)


