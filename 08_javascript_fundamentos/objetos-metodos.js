function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno0 = {
    nome: "Alana",
    notas: [8, 10],
    media: calcMedia
}

var aluno1 = {
    nome: "Carla",
    notas: [5, 6],
    media: calcMedia
}



console.log(aluno0.nome)
console.log(aluno0.media());

console.log(aluno1.nome)
console.log(aluno1.media());