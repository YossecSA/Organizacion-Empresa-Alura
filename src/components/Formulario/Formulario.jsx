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

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();

        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        };
        registrarColaborador(datosEnviar);
    };

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, color });
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
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Ingresar Titulo"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <CampoTexto
                    titulo="Color"
                    placeholder="Ingresar el color"
                    required
                    valor={color}
                    type="color"
                    actualizarValor={setColor}
                />
                <Boton texto="Registrar Equipo" />
            </form>
        </section>
    );
};

export default Formulario;
