//tercer arreglo

let juan = [3,4,2]; 

console.log (juan.length);

juan.pop();
console.log(juan);


//tercer arreglo (4 metodos)
let sumare = juan.reduce((sumare, valor)=>{
    return sumare + valor;
})
console.log (sumare); 
//2
simi= 50
juan.forEach ((numero)=>{
    simi+=numero; 
})
console.log(simi);

//3
let filtror = juan.filter(numero =>{
    return numero  <= 7; 
})
console.log (filtror); 

//4
let mapar = juan.map(val=>{
    return("$"+ val*20 + "pesos")
})
console.log (mapar); 

