let amigo ={nome:'Joyce',
sexo:'F',
peso: 51.6,
engordar(p=0){
    console.log('Engordou')
    this.peso +=p
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)