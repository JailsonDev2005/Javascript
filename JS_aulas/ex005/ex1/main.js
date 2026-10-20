let area = document.getElementById("area")

area.addEventListener("click", clicar)
area.addEventListener("mouseenter", enter)
area.addEventListener("mouseout", saiu)

function clicar(){
    area.innerText = "Você clicou"
    area.style.background = "green"
}

function enter(){
    area.innerText = "Você Entrou"
    area.style.background = "blue"
}

function saiu(){
    area.innerText = "Você saiu"
    area.style.background = "red"
}