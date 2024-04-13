let chave = '8415e5281cbcc981e1a003b3f9ddb002'

async function buscarCidade(cidade) {
  let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}`).then(resposta => resposta.json())

  // AWAIT = ESPERE
  // FETCH -> Ferramenta do JavaScript para acessar servidores
  // THEN -> ENTÃO
  // JSON -> JAVASCRIPT OBJECT NOTATION
  //console.log(dados)

   // Completando os elementos HTML com os dados da API
   document.querySelector('.cidade').innerText = `Tempo em: ${dados.name}`;
   document.querySelector('.temp').innerText = `${Math.round(dados.main.temp - 273.15)}°C`; // Convertendo Kelvin para Celsius
   document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
   document.querySelector('.umidade').innerText = `Umidade: ${dados.main.humidity}%`;
 }

function cliqueiNoBotao() {
  let cidade = document.querySelector('.input-cidade').value

  buscarCidade(cidade);
}
