import React, { useState } from "react";
import Header from "./components/header/Header";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";
import Equipo from "./components/Equipo/Equipo";
import Footer from "./components/Footer/Footer";
import { v4 as uuid } from "uuid";

const App = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [colaboradores, setColaborador] = useState([
        {
            id: uuid(),
            equipo: "Front End",
            foto: "https://github.com/YossecSA.png",
            nombre: "Yossec Suarez",
            puesto: "Docente",
        },
    ]);
    const [Equipos, actualizarEquipos] = useState([
        {
            id: uuid(),
            titulo: "Programacion",
            colorPrimario: "#D9F7E9",
            colorSecundario: "#57C278",
        },
        {
            id: uuid(),
            titulo: "Front End",
            colorPrimario: "#E8F8FF",
            colorSecundario: "#82CFFA",
        },
        {
            id: uuid(),
            titulo: "Data Science",
            colorPrimario: "#F0F8E2",
            colorSecundario: "#A6D157",
        },
        {
            id: uuid(),
            titulo: "Devops",
            colorPrimario: "#FDE7E8",
            colorSecundario: "#E06B69",
        },
        {
            id: uuid(),
            titulo: "UX y Diseño",
            colorPrimario: "#FAE9F5",
            colorSecundario: "#DB6EBF",
        },
        {
            id: uuid(),
            titulo: "Móvil",
            colorPrimario: "#FFF5D9",
            colorSecundario: "#FFBA05",
        },
        {
            id: uuid(),
            titulo: "Innovación y Gestión",
            colorPrimario: "#FFEEDF",
            colorSecundario: "#FF8A29",
        },
    ]);

    const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const registrarColaborador = (colaborador) => {
        setColaborador([...colaboradores, colaborador]);
    };

    const eliminarColaborador = (id) => {
        const nuevosColaboradores = colaboradores.filter(
            (colaborador) => colaborador.id != id
        );
        setColaborador(nuevosColaboradores);
    };

    const actualizarColor = (color, id) => {
        console.log(color);
        const equiposActualizados = Equipos.map((equipo) => {
            if (equipo.id === id) {
                equipo.colorSecundario = color;
            }
            return equipo;
        });
        actualizarEquipos(equiposActualizados);
    };

    const crearEquipo = (nuevoEquipo) => {
        actualizarEquipos([...Equipos, {...nuevoEquipo, id:uuid() }]);
    };

    return (
        <div>
            <Header />
            {mostrarFormulario === true ? (
                <Formulario
                    equipos={Equipos.map((equipo) => equipo.titulo)}
                    registrarColaborador={registrarColaborador}
                    crearEquipo={crearEquipo}
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
                        eliminarColaborador={eliminarColaborador}
                        actualizarColor={actualizarColor}
                    />
                );
            })}
            <Footer></Footer>
        </div>
    );
};

export default App;
