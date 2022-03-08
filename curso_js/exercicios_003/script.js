var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var msg = document.getElementById('msg')
var res = document.querySelector('div#contagem')
function contar(){
    if (inicio.toString().length == 0 || fim.toString().length == 0 || passo.toString().length == 0){
        window.alert('ERRO')
    }
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    msg.innerHTML='Contando:'
    
    if (i<f){
        for(let c = i; c <= f; c += p) {
            res.innerHTML+=`${c}`
            if (c<f){
                res.innerHTML+=`&#128073;`
            }
        }
    }else if (f<i){
            for(let c = i; c >= f; c -= p) {
                res.innerHTML+=`${c} `
                if (c>f){
                    res.innerHTML+=`&#128073;`
                }
            }
        }
    
    res.innerHTML+=`\u{1F3C1}`
}