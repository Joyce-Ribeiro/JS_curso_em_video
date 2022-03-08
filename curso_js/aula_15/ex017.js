let num = [1,2,3,4,5]
for (var pos=0;pos<num.length;pos++){
    console.log(`posição ${pos} numero ${num[pos]}`)
}
for(let pos in num){
    console.log(`posição ${pos} numero ${num[pos]}`)
}