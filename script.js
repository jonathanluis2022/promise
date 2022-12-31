
function rand(min, max) {
    min = 0;
    max = 1000;
    return Math.floor(Math.random() * (max - min) + min);

}

function esperaAi(msg, rand) { //vai retorna a msg em algum tempo 
    return new Promise((resolve, reject) => { //promise que vai dar resolve ou reject 
        if (typeof msg !== 'string') return reject(false)
        setTimeout(() => {
            resolve(msg)
        }, rand)
    })
}

esperaAi('Frase 1 ', rand(5, 1))
    .then(resposta1 => { //then  =  si der certo
        console.log(resposta1)
        return esperaAi('frase 2 ', rand(5, 1)) // uma outra promise 
    })
    .then(resposta2 => {
        console.log(resposta2)
        return esperaAi('Frase 3 ', rand(5, 1))
    })
    .then(resposta3 => {
        console.log(resposta3)
    })
    .catch(e => { console.log('Error') }) // si nao for string vai cai aqui no catch 
