//segunso arreglo
let li = [100, 200, 300, "juan", "camilo"];

console.log(li[2]); 
console.log(li[1]); 
console.log(li[0]); 
console.log(li[3]); 
console.log(li[4]); 


//segundo arreglo (4 metodos)

let sumali = li.reduce((sumali, valor)=>{
    return sumali + valor;
})
console.log (sumali); 

//2
sisi = 100
li.forEach ((numerador)=>{
    sisi+=numerador;
})
console.log(sisi);

//3
let filtre = li.filter(numerador =>{
    return numerador  <= 150; 
})
console.log (filtre); 

//4
let mapar = li.map(vale=>{
    return("$"+ vale*10 + "pesos")
})
console.log (mapar); 

