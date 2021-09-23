//Uma lista com: Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

function mediaAluno(name, n1, n2) {
    let lista = []
    let situacao
    let media = (n1 + n2) / 2
    if (media > 6) {
        situacao = "Aprovado"
    } else {
        situacao = "Reprovado"
    }
    lista.push(name, n1, n2, media, situacao)
    return lista
}

var aluno0 = mediaAluno("Alana", 5, 9)
var aluno1 = mediaAluno("Bruno", 4, 6)
var aluno2 = mediaAluno("Carla", 8, 7)

console.log(`${aluno0}\n${aluno1}\n${aluno2}`)


