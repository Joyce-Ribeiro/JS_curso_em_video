var n = document.getElementById('num')
var res = document.querySelector('select#tabuada')
function gerar(){
    if (n.toString().length == 0){
        window.alert('ERRO')
    }
    else{
        var num=Number(n.value)
        res.innerHTML=''
        for(var c=1; c<=10; c++){
            var op = document.createElement('option')
            mult=num*c
            op.text=`${num}x${c}=${mult}`
            res.appendChild(op)
        }
    }
}