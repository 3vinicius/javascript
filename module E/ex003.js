let idades = [13, 24, 22, 25, 87]

idades.push(22)
idades[0] = 14
idades.sort()

for(var pos in idades){
    console.log(idades[pos])
}
