/* Calculando Fatorial */

function factor(a){
    var factora = a
    for(var n = 1; n!=a; n++){
        factora *= n
    }
    return factora
}

console.log(factor(5))