import React from "react";
import { inject, observer } from "mobx-react";
import cursosStore from "./stores/CursosStore";
import "./Menu.css";

class Menu extends React.Component {
    nombreRef = React.createRef();
    fotoRef = React.createRef();

    render() {
        return (
            <div className="menu-container">
                {/* Header */}
                <header className="header">
                    <h1>LISTADO DE CURSOS</h1>
                </header>

                {/* Contenido */}
                <div className="content">
                    <h1>DISPONES DE UN TOTAL DE {cursosStore.numeroCursos} CURSOS</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        cursosStore.agregarCurso({
                            nombre: this.nombreRef.current.value,
                            foto: this.fotoRef.current.value
                        });
                        e.target.reset();
                    }}>

                        <input
                            type="text"
                            placeholder="Nombre del curso"
                            required
                            ref={this.nombreRef}
                        />
                        <input
                            type="text"
                            placeholder="Foto URL del curso"
                            required
                            ref={this.fotoRef}
                        />
                        <button type="submit">Guardar curso</button>
                        <button onClick={() => { cursosStore.borrarCurso(); }}>Borrar todos los cursos</button>
                    </form>
                    <ul className="horizontal-list">
                        {cursosStore.cursos.map(curso => (
                            <li key={curso.nombre}>
                                <h2>{curso.nombre}</h2>
                                <div className="course-details">
                                    <img src={curso.foto} alt={curso.nombre} style={{ maxWidth: "150px" }} />
                                    <button onClick={() => { cursosStore.borrarCursoPorNombre(curso.nombre); }}>Borrar curso</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* Footer */}
                <footer className="footer">
                    <p>WEB REALIZADA POR CRISTIAN PLAZA ORTIZ</p>
                </footer>
            </div>
        );
    }
}

export default inject("CursosStore")(observer(Menu));
