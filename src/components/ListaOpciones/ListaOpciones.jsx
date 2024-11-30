import React from "react";
import "./ListaOpciones.css";
const ListaOpciones = (props) => {
    const Equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ];

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value);
    };

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>
                    Seleccionar equipo
                </option>
                {Equipos.map((equipo, index) => (
                    <option key={index} value={equipo}>
                        {equipo}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListaOpciones;
