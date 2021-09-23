let p = document.getElementById('p1')

//São 3 tipos de acesso de modificação:

//innerHTML recebe tags, os outros não
p.innerHTML = "<a>Novo Conteúdo"

// innerText capta qualquer texto exibido na tela
p.innerText = "Conteúdo mais novo"

// textContent capta qualquer texto que esteja no HTML 
//(mesmo que não esteja sendo exibido)
p.textContent = "Mais novo ainda"

//Alterando atributos
p.style = "color:blue"

//Alterando atritubos 
p.getAttribute("style")
p.setAttribute("style", "color: green")

//Criando atritubos (atentar que usando a mesma variável, as modificações
//anteriores se perdem, sendo necessário acumular as modificações no mesmo 
//set para não perde-las)
p.setAttribute("style", "text-decoration: underline; color: green")