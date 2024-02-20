import { makeObservable, observable, action, computed, reaction } from 'mobx';

class CursosStore {

    constructor() {
        this.cursos = [];
        const storedCursos = localStorage.getItem('cursos');
        if (storedCursos) {
            this.cursos = JSON.parse(storedCursos);
        }

        makeObservable(this, {
            cursos: observable,
            agregarCurso: action,
            borrarCurso: action,
            numeroCursos: computed,
        });
    }
    agregarCurso = (curso) => {
        this.cursos.push(curso);
    };
    get numeroCursos() {
        return this.cursos.length;
    };
    borrarCurso = () => {
        this.cursos = [];
    };

    borrarCursoPorNombre = (nombre) => {
        this.cursos = this.cursos.filter(curso => curso.nombre !== nombre);
    };


}

const cursosStore = new CursosStore();

reaction(
    () => JSON.stringify(cursosStore.cursos),
    cursosStr => {
        localStorage.setItem('cursos', cursosStr);
    }
);

export default cursosStore;
