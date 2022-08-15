var hj = new Date()
var sem =  hj.getDay()


console.log(sem)

switch (sem){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexts")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("Valor invalido")
}