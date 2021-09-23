// Trabalhando com atributos 2 ===> data- e dataset

let lista = document.getElementById("lista");

//let num = parseInt(lista.getAttribute("data-n"));
//Uma vez que se define o atributo como "data-" na frente do nome no html
// é possível usar o variavel.dataset.nomedoatributo, ao invés de usar o 
//getAttribute. EX:

//lista.dataset.n = "4" tanto aqui fora como dentro da atribuição da let num

let num = parseInt(lista.dataset.n = "4");

//para setar um elemento utilizar o lista.dataset.n = "4". Atribuição normal

//sempre lembrar que esses atributos devem ser convertidos de string para Int se for trabalhar com números (parseInt)

let conteudo = ""

for (let i = 0; i < num; i++) {

   conteudo += "<li>"+ i +"</li>";

}

lista.innerHTML = conteudo


data-_e_dataset