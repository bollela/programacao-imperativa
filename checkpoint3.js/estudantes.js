const listaEstudantes = JSON.parse(require("./listaEstudantes"));

let Aluno = require("./alunos");

function Curso(nomeCurso, notaAprovar, faltaMaxima, listaAlunos = []) {
    this.nomeCurso = nomeCurso;
    this.notaAprovar = notaAprovar;
    this.faltaMaxima = faltaMaxima;
    this.listaAlunos = listaAlunos;

    this.addAluno = (nome, qtdFaltas, notas) => {
        this.listaAlunos.push(new Aluno(nome, qtdFaltas, notas));
    };



    this.aprovacao = (nome) => {
        let aluno = this.listaAlunos.find((procuraAluno) => procuraAluno.nome === nome);

        if ((aluno.media >= this.notaAprovar && aluno.qtdFaltas < this.faltaMaxima) ||
            (aluno.qtdFaltas === this.faltaMaxima &&
                aluno.media >= this.notaAprovar * 1.1)
        ) {
            return `aluno ${aluno.nome} foi aprovado`
        }
        else {
            return `aluno ${aluno.nome} foi reprovado`
        }
    }
    this.notaAprovacao = () => {
        return this.listaAlunos.map((aluno) => {
            return ((aluno.media >= this.notaAprovar && aluno.qtdFaltas < this.faltaMaxima) ||
                (aluno.qtdFaltas === this.faltaMaxima &&
                    aluno.media >= this.notaAprovar * 1.1))

        })

    }
}
function adicionarEstudantes(lista, curso) {
    for (i = 0; i < lista.length; i++) {
        curso.addAluno(lista[i].nome, lista[i].qtdFaltas, lista[i].notas);
    }
    return curso;
}

let curso = new Curso("ctd", 8, 4);

adicionarEstudantes(listaEstudantes, curso);
console.log(curso)

console.log(curso.aprovacao("moises bollela"));
console.log(curso.notaAprovacao());