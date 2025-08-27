const clickBotao = document.getElementById("tema")
const corpo = document.querySelector(".corpo")
const pai = document.querySelector(".pai")
const body = document.querySelector("body")
const transitar = document.querySelectorAll(".transitar")
const tabelatr = document.getElementsByTagName("tr")
const tabelatd = document.getElementsByTagName("td")
let tema = 0


function mudarTema () {
    if (tema == 0) {
        tema++
        // alert(tema)
        body.style.backgroundColor = "#222"
        corpo.style.backgroundColor = "#222"
        pai.style.boxShadow = "3px 3px 20px black"
        pai.style.backgroundColor = "#444"
        pai.style.color = "white"
        pai.querySelector("h1").style.backgroundColor = "#0072BB"
        for (let tr of tabelatr) {
    tr.style.border = "3px solid white"
}
        for (let td of tabelatd) {
    td.style.border = "3px solid white"
}

        for (let elem of transitar) {
    elem.querySelector("button").style.backgroundColor = "#666"
}
    } else {
        tema--
        // alert(tema)
        body.style.backgroundColor = "#fff"
        corpo.style.backgroundColor = "#fff"
        pai.style.boxShadow = "3px 3px 20px black"
        pai.style.backgroundColor = "whitesmoke"
        pai.style.color = "black"
        pai.querySelector("h1").style.backgroundColor = "skyblue"
        for (let tr of tabelatr) {
    tr.style.border = "3px solid black"
}
        for (let td of tabelatd) {
    td.style.border = "3px solid black"
}

        for (let elem of transitar) {
    elem.querySelector("button").style.backgroundColor = "#fff"
}
        
    }

}

clickBotao.addEventListener("click", function() {
    mudarTema()
})