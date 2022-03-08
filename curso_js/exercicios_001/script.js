var img = window.document.getElementById('imagem')
var msg = window.document.getElementById('horas')
function mostrar_imagem(){
    var data = new Date()
    var hr = data.getHours()
    
    msg.innerHTML=`São ${hr} horas`
    if (hr<=12){
        img.src = 'sundrop.jpg'
        window.document.body.style.background = '#DAA520'
    }else if (hr<=18){
        img.src = 'glamfreddy.jpg'
        window.document.body.style.background = '#FF8C00'
    }else{
        img.src = 'moondrop.jpg'
        window.document.body.style.background = '#191970'
    }
    
}