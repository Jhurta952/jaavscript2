// cuarto arreglo 
let regla = [6,7,8]; 

regla.push("santi", true); 
console.log(regla)

//cuarto arreglo (4 metodos)
let dues = regla.reduce((duna, valor)=>{
    return duna + valor;
})
console.log (dues); 
//2
sisa= 50
regla.forEach ((numero)=>{
    sisa+=numero; 
})
console.log(sisa);

//3
let añadir = regla.filter(numero =>{
    return numero  <= 7; 
})
console.log (añadir); 

//4
let world = regla.map(val=>{
    return("$"+ val*20 + "pesos")
})
console.log (world); 




