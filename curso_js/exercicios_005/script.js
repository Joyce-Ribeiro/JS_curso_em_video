var vetor = []
var msg = document.getElementById('msg')
function adicionar(){
    msg.innerHTML=` `
    let num = document.getElementById('num')
    let n = Number(num.value)
    console.log(n.toString().length)
    if (num.length==0 ){
        window.alert(`erro`)
    }
    if (vetor.indexOf(n)!=-1 || n<=0 || n >100){
        window.alert(`Numero ja existe na lista ou é invalido`)
    }else{
        vetor.push(n)
        addlist(n)
    }
}
function addlist(n){
    let res = document.getElementById('lista')
    let op = document.createElement('option')
    op.text=`O valor ${n} foi adicionado`
    res.appendChild(op)

}
function finalizar(){
    let quant = vetor.length
    vetor.sort()
    let maior=vetor[quant-1]
    let menor = vetor[0]
    let soma = 0
    for (let pos in vetor){
        soma+=vetor[pos]
    }
    let med=soma/quant
    msg.innerHTML=`<p>Ao todo, temos ${quant} números cadastrados</p>`
    msg.innerHTML+=`<p>O maior valor informado foi ${maior}</p>`
    msg.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
    msg.innerHTML+=`<p>somando todos os valores, temos ${soma}</p>`
    msg.innerHTML+=`<p>A médida dos valores digitados é ${med}</p>`
}