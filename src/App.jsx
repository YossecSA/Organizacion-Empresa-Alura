import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";

const App = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [colaboradores, setColaborador] = useState([]);

    const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const registrarColaborador = (colaborador) => {
        setColaborador([...colaboradores, colaborador]);
    };

    const Equipos = [
        {
            titulo: "Programacion",
            colorPrimario: "#D9F7E9",
            colorSecundario: "#57C278",
        },
        {
            titulo: "Front End",
            colorPrimario: "#E8F8FF",
            colorSecundario: "#82CFFA",
        },
        {
            titulo: "Data Science",
            colorPrimario: "#F0F8E2",
            colorSecundario: "#A6D157",
        },
        {
            titulo: "Devops",
            colorPrimario: "#FDE7E8",
            colorSecundario: "#E06B69",
        },
        {
            titulo: "UX y Diseño",
            colorPrimario: "#FAE9F5",
            colorSecundario: "#DB6EBF",
        },
        {
            titulo: "Móvil",
            colorPrimario: "#FFF5D9",
            colorSecundario: "#FFBA05",
        },
        {
            titulo: "Innovación y Gestión",
            colorPrimario: "#FFEEDF",
            colorSecundario: "#FF8A29",
        },
    ];

    return (
        <div>
            <Header />
            {mostrarFormulario === true ? (
                <Formulario
                    equipos={Equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                />
            ) : (
                <></>
            )}

            <MiOrg cambiarMostrar={cambiarMostrar} />
            {Equipos.map((equipo) => {
                return (
                    <Equipo
                        datos={equipo}
                        key={equipo.titulo}
                        colaboradores={colaboradores.filter(
                            (colaborador) =>
                                colaborador.equipo === equipo.titulo
                        )}
                    />
                );
            })}
            <Footer></Footer>
        </div>
    );
};

export default App;
