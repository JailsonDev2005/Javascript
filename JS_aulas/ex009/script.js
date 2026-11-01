
function verificar(){
    let nascimento = document.getElementById("nasc");

    let anoAtual = new Date().getFullYear();
    let exibirResult = document.getElementById("res");
    
    let img = document.createElement("img")
    img.setAttribute('id', 'foto')
    
    if (nascimento.value.length == 0 || Number(nascimento.value) > anoAtual){
        alert("Verifique os dados e tente novamente")
    }else{
        let Fsex = document.getElementsByName("sexo")
        let idade = anoAtual - Number(nascimento.value)
        let genero = ""
        if (Fsex[0].checked){
            genero = "homem"
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'crianca-menino.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'adolecente-menino.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'homem-adulto.jpg')
            }else{
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        }else if (Fsex[1].checked){
            genero = "mulher"
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menina-crianca.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'adolecente-menina.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
            }else{
                img.setAttribute('src', 'idosa-mulher.jpg')                
            }
        }
        exibirResult.innerHTML = `Sua idade é ${idade} e seu genero é ${genero}`
        exibirResult.appendChild(img)
    }

}