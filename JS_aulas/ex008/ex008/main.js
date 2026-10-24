function carregar(){
    let mensagem = document.getElementById("msg");
    let img = document.querySelector("img");
    let data = new Date()
    let body = document.querySelector("body")
    let horaDeAgora = data.getHours()

    mensagem.innerHTML = `Agora são ${horaDeAgora} Horas`

    if (horaDeAgora >= 0 && horaDeAgora < 12){
        img.src = "img/pexels-fatima-acunman-759286837-25473492.jpg"
        body.style.background = "rgb(7, 131, 59)"
        
    } else if(horaDeAgora >= 12 && horaDeAgora <= 18){
        img.src = "img/pexels-alinevianafoto-2465933.jpg"
        body.style.background = "rgb(223, 142, 36)"
    }else{
        img.src = "img/pexels-punyasloka-choudhury-262712-958014.jpg"
        body.style.background = "rgb(75, 26, 107)"
    }
}