function doisNumeros(numero1,numero2){
    let resultado = numero1 + numero2 
    console.log(resultado)
}

function ehpar(numero){
    if(numero % 2 === 0){
        console.log(`O número ${numero} é par!`)
    }else{
        console.log(`O numero ${numero} não é par!`)
    }
}


let numero = 22 
let numero2 = 33 

console.log("-------------")
doisNumeros(numero,numero2)
console.log("--------------")
ehpar(numero)
console.log("---------------")
ehpar(numero2)
console.log("---------------")
