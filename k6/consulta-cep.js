import http from 'k6/http';
// import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {

  const url = 'https://viacep.com.br/ws/25620160/json'

  const resp = http.get(url);
  // console.log('O tipo é um:', typeof resp)
  // console.log(resp.body)
  
  // Pegando a resposta do body e jogando pra uma variável 
  const logradouro = resp.body
  // Verificando o tipo da variável 
  // console.log('logragradouro é uma:', typeof logradouro)

  //Convertendo um json para objeto
  const convertToObject = JSON.parse(logradouro)
  // console.log("Este é um JSON convertido para object")
  // console.log('convertToObject é um:', typeof convertToObject)

  const rua = convertToObject.logradouro;
  const cidade = convertToObject.localidade
  const cep = convertToObject.cep

  console.log('O nome da rua:',rua,',na cidade:',cidade,',com o cep:',cep)

  // console.log(resp.status)
  // sleep(1);
}


