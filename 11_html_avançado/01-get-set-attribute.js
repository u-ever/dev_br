// Trabalhando com atributos ===> getAttribute e setAttribute

let image = document.getElementById("nature");

 image.addEventListener("click", function(){

//     // Formas de capturar um elemento.  

//     // 1º Forma - O ponto (este só funciona para atributos que já existem):
    
//     // image.src = "./assets/nature02.jpg"

//     // 2º Forma - Selecionando o atributo:    

     image.setAttribute("src", "./assets/nature02.jpg")

//     // Capturando o atributo src:
    
//     // let lastImage = image.getAttribute("src")
//     // image.setAttribute("src", "./assets/nature02.jpg") 
//     // console.log(lastImage)
    
//     // Diferente do ponto, o setAtribute pode inserir atributos no elemento. Inclusive atributos que não existem:
    
//     image.setAttribute("cor", "vermelho")
//     // o atributo cor = vermelho não é compreendido pelo navegador, mas é possível inseri-lo livremente
//     // o getAttibute pode acessar qualquer atributo.

})

let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("num"));

let conteudo = ""

for (let i = 0; i < num; i++) {

   conteudo += "<li>"+ i +"</li>";

}

lista.innerHTML = conteudo