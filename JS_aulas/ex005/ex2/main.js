function somar(){
    let n1 = document.getElementById("num1")
    let n2 = document.getElementById("num2")
    let valon1 = Number(n1.value)
    let valon2 = Number(n2.value)
    let resultado = valon1 + valon2


    let r = document.getElementById("res")
    r.innerText = `a soma entre ${valon1} e ${valon2} e ${resultado}`
}