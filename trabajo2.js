
// primer arreglo
let num = [5,5,8,]; 

console.log (num.length);



//primer arreglo (4 metodos)
let suma = num.reduce((suma, valor)=>{
    return suma + valor;
})
console.log (suma); 

//2
sima= 10
num.forEach ((numero)=>{
    sima+=numero; 
})
console.log(sima);

//3
let filtro = num.filter(numero =>{
    return numero  <= 7; 
})
console.log (filtro); 

//4
let mapa = num.map(val=>{
    return("$"+ val*20 + "pesos")
})
console.log (mapa); 

