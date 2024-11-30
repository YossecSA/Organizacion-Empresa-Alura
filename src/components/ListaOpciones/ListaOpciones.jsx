import React from "react";
import "./ListaOpciones.css";
const ListaOpciones = () => {

    const Equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select>
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
