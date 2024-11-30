import React from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar Nombre"/>
                <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto"/>
                <CampoTexto titulo="Foto" placeholder="Ingresar Foto"/>
                <ListaOpciones />
                <Boton texto='Crear'/>
            </form>
        </section>
    );
};

export default Formulario;
