var id = 17
console.log(`Sua idade é de ${id}`)

if (id < 16){
    console.log("Não pode votar")
}else if (16 < id && id <= 18){
    console.log("Voto opcional")
}else if (id >= 67){
    console.log("Voto opcional")
}else{
    console.log("Exerça sua cidadania! Vote nulo")
}