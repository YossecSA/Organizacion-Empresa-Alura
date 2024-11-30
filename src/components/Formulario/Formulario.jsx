import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre" required />
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
                <CampoTexto titulo="Foto" placeholder="Ingresar Foto" required />
                <ListaOpciones />
                <Boton texto='Crear'/>
            </form>
        </section>
    );
};

export default Formulario;
