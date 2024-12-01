import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };
        props.registrarColaborador(datosEnviar);
    };
    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto
                    titulo="Nombre"
                    placeholder="Ingresar Nombre"
                    required
                    valor={nombre}
                    actualizarValor={setNombre}
                />
                <CampoTexto
                    titulo="Puesto"
                    placeholder="Ingresar Puesto"
                    required
                    valor={puesto}
                    actualizarValor={setPuesto}
                />
                <CampoTexto
                    titulo="Foto"
                    placeholder="Ingresar Foto"
                    required
                    valor={foto}
                    actualizarValor={setFoto}
                />
                <ListaOpciones
                    valor={equipo}
                    actualizarEquipo={setEquipo}
                    equipo={props.equipos}
                />
                <Boton texto="Crear" />
            </form>
        </section>
    );
};

export default Formulario;
