async function getCep() {

    let cep = '25620160'
    let url = `https://viacep.com.br/ws/${cep}/json`
    let resposta = await fetch(url)
    let resposta_json = await resposta.json()

    console.log(resposta_json)
    console.table(resposta_json)
}

getCep()

// https://viacep.com.br/ws/25620160/json