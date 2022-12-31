
function tempo(max , min) {
    max  = 10;
    min = 0 ;
    return Math.floor (Math.random() * (max + mim) - min)

}

function vaiDarcerto( mensagem , tempo) {
    return Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(mensagem)

        } , tempo)
    })
}


vaiDarcerto ('bora mais um ', tempo())
.then( response => {console.log(response)})
return vaiDarcerto
.catch()