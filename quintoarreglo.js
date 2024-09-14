//quinto arreglo
let li = [100, 200, 300, "juan", "camilo"];

console.log(li[2]); 
console.log(li[1]); 
console.log(li[0]); 
console.log(li[3]); 
console.log(li[4]); 

li.pop();
console.log(li);

//quinto arreglo (4 metodos)
let baru = li.reduce((baru, valor)=>{
    return baru + valor;
})
console.log (baru); 
//2
nea= 150
li.forEach ((numero)=>{
    nea+=numero; 
})
console.log(nea);

//3
let suge = li.filter(numero =>{
    return numero  <= 150; 
})
console.log (suge); 

//4
let mundo = li.map(val=>{
    return("$"+ val*10 + "pesos")
})
console.log (mundo); 