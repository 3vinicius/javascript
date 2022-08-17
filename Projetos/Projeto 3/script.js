function clicar(){

    /* Declarando variaveis */
    var ini = window.document.getElementById("ini")
    var pass = window.document.getElementById('pas')
    var fim = window.document.getElementById('fim')
    var escreva = window.document.getElementById("escreva")
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)

    /* Construção do algoritimo */

    for(var v = 1; v < f; v+=p){
        escreva.innerHTML += v 
    }



    


}