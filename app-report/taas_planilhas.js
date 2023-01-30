const host = ''

const url = `${host}/TAAS-K6_planilhas`

console.log(url)

const resposta = async () => {
    const res = await fetch(url)
    const resposta_json = await res.json()
    console.log(resposta_json)
}

resposta()