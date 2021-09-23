function aluno(nome, n1, n2) {
    
    this.name = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = (this.nota1 + this.nota2) / 2

}

var a = new aluno("Alana", 8, 9);
var b = new aluno("Carla", 5, 4);

var turma = [a , b]

for (aluno in turma) {
    console.log(turma[aluno]);
}
