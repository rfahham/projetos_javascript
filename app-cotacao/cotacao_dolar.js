const data = "1-27-2023"

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$format=json`

console.log(data)
console.log(url)

const resposta = async () => {
    const res = await fetch(url)
    const resposta_json = await res.json()
    console.log(resposta_json)
}

resposta()