import React from "react";
import "./Equipo.css";

const Equipo = (props) => {

    const { titulo, colorPrimario, colorSecundario } = props.datos

    return (
        <section className="equipo" style={{backgroundColor: colorPrimario}}>
            <h3>{titulo}</h3>
            <div className="colaboradores" style={{ borderBottom: colorSecundario }}></div>
        </section>
    );
};

export default Equipo;
