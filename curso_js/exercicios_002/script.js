
function verificar(){
   
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('nasc')
    var res = document.querySelector('div#imgs')
    
    
    if (nasc.toString().length == 0 || Number(nasc.value) > ano){
        window.alert('ERRO')
    }else{
        var idade = ano - Number(nasc.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var msg = window.document.getElementById('msg')
        img.innerHTML=''
        if(document.getElementById('mas').checked){
            if(idade<=12){
                img.setAttribute('src', 'infmas.jpg')
            }else if (idade<=18){
                img.setAttribute('src', 'admas.jpg')
            }else if (idade<=60){
                img.setAttribute('src', 'adulto.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }
        
        msg.innerHTML=`Homem de ${idade} anos`
        }else if(document.getElementById('fem').checked){
            if(idade<=12){
                img.setAttribute('src', 'inffem.jpg')
            }else if (idade<=18){
                img.setAttribute('src', 'adfem.jpeg')
            }else if (idade<=60){
                img.setAttribute('src', 'adulta.jpg')
            }else{
                img.setAttribute('src', 'idosa.jpg')
            }
            msg.innerHTML=`Mulher de ${idade} anos`
        }else{
            window.alert('ERRO')
        }
        
        res.appendChild(img)        
    }
    
}