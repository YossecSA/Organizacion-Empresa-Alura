import React, { useState } from "react";
import Header from "./components/header/Header";
import './App.css';
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";

const App = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(true)

    const cambiarMostrar = () => {
        setMostrarFormulario(!mostrarFormulario)
    }

    return (
        <div>
            <Header />
            {mostrarFormulario === true ?  <Formulario/> : <></>}
        
            <MiOrg cambiarMostrar={cambiarMostrar} />
        </div>
    );
};

export default App;
