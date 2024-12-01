import React from "react";
import "./Colaborador.css";

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo } = props.datos;
    const { colorSecundario, eliminarColaborador } = props;
    return (
        <div className="colaborador">
            <img
                className="eliminar"
                src="./img/delete.png"
                onClick={eliminarColaborador}
            />
            <div
                className="encabezado"
                style={{ backgroundColor: colorSecundario }}
            >
                <img src={foto} alt={nombre} />
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    );
};
import "./Colaborador.css";

export default Colaborador;
