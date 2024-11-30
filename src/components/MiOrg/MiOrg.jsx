import React, { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

    // const [mostrar, setMostrar] = useState(true)
    // const manejarClick = ()=> {
    //     setMostrar(!mostrar)
    // }

    return (
        <section className="orgSection">
            <h3 className="title">Mi organizacion</h3>
            <img src="/img/agregar.png" onClick={props.cambiarMostrar}/>
        </section>
    );
};

export default MiOrg;
