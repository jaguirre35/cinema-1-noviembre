// let nombres=["Juan","Lorena","Hector","Tito","Ivy"]

//escribir un ciclo que repita una accion
// for(let i=0; i<5; i++){
//     console.log(nombres[i])
// }

//Forma de reescribir un ciclo for con js
// nombres.forEach(function(nombre){
//     console.log(nombre)
// })

// let numeros=[1,2,3,4,5,6,7,8,9,10]

// numeros.forEach(function(numero){
//     console.log(numero);
// })

// let salarios=[3500000,5000000,8000000]

// salarios.forEach(function(salario){
//     let deduccion=salario*19/100;
//     console.log(salario-deduccion)
// })

let calificaciones=[3.5,4,2,1.5,3]

let suma=0
calificaciones.forEach(function(calificacion){
    suma=suma+calificacion
    
})
console.log(suma/calificaciones.length)
