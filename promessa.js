let aceitar = true;

console.log(`pedindo uber`)
const promessa = new Promise((resolve, reject) => {
    
    if(aceitar){
        return resolve(`pedido aceito`);
    }
    
    return reject(`pedido negado`)
})

console.log(`aguardando`)

promessa
   .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    .finally(() => console.log(`corrida finalizada`))