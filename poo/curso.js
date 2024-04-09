class Curso {
    constructor(materia, professor, duracao){
        this.materia = materia,
        this.professor = professor,
        this.duracao = duracao
    }
    get prof() {
        return this.professor
    }
}

let poo = new Curso('Programação orientada a objetos', 'Rafaella', '1 semestre')

console.log("Matéria: " + poo.materia)

console.log("Professor: " + poo.professor)

console.log("Duração: " + poo.duracao)