var agora = new Date()
var hr = agora.getHours()
console.log(`Hora: ${hr}`)
if(hr<12){
    console.log('DIA')
}
else if(hr<=18){
    console.log('TARDE')
}
else{
    console.log('NOITE')
}