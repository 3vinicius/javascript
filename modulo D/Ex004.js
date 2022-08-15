var agr = new Date()
var hr = agr.getHours()

console.log(`São ${hr}hrs`)
if(hr >= 6 && hr < 12){
    console.log('Bom dia')
} else if (hr >= 12 && hr < 18){
    console.log("Boa tarde")
} else if (hr >= 18 && hr < 24){
    console.log('Bom noite')
}else{
    console.log('Ainda é madrugada!')
    console.log("Boa noite")}