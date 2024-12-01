import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario, id } = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor } = props;
    return (
        colaboradores.length > 0 && (
            <section
                className="equipo"
                style={{ backgroundColor: colorPrimario }}
            >
                <input
                    type="color"
                    className="inputColor"
                    value={colorSecundario}
                    onChange={(e) => {actualizarColor(e.target.value, id)}}
                />
                <h3>{titulo}</h3>
                <div
                    className="colaboradores"
                    style={{ borderBottom: colorSecundario }}
                >
                    {colaboradores.map((colaborador, index) => (
                        <Colaborador
                            datos={colaborador}
                            key={index}
                            colorSecundario={colorSecundario}
                            eliminarColaborador={eliminarColaborador}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Equipo;
