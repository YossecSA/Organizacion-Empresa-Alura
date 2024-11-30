import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    const [nombre, setNombre] = useState(second);
    const [puesto, setPuesto] = useState(second);
    const [foto, setFoto] = useState(second);

    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
        };
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
                <ListaOpciones />
                <Boton texto="Crear" />
            </form>
        </section>
    );
};

export default Formulario;
