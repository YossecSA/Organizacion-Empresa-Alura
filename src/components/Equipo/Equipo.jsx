import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador/Colaborador";

const Equipo = (props) => {

    const { titulo, colorPrimario, colorSecundario } = props.datos

    return (
        <section className="equipo" style={{backgroundColor: colorPrimario}}>
            <h3>{titulo}</h3>
            <div className="colaboradores" style={{ borderBottom: colorSecundario }}>
                <Colaborador></Colaborador>
            </div>
        </section>
    );
};

export default Equipo;
