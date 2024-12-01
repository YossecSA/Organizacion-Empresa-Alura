import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {
    const { titulo, colorPrimario, colorSecundario } = props.datos;
    const { colaboradores } = props;
    return (
        colaboradores.length > 0 && (
            <section
                className="equipo"
                style={{ backgroundColor: colorPrimario }}
            >
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
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Equipo;