import React from "react";
import ReactDOM from "react-dom/client";
import {Cabecera} from "./components/Cabecera";
import {Ingresar} from "./components/Login";
/*import {Button} from "./components/Button";
import{UserCard} from "./components/Saludar";*/

const root = ReactDOM.createRoot(document.getElementById("root"));

/*function Saludos(){
    return <h1>Saludos Alumnos del TEC :)</h1>;
}

function Saludos2(){
    const titulo ='Nueva información';
    return (
    <section>
        <h2> Nombre de la noticia: {titulo} </h2>
        <p>Contenido de la noticia va aquí</p>
    </section>
    );
 }

function Saludos3(){
    const header ='Probando probando';
    return <h2> ¿Qué clase de brujería es esta? {header}</h2>;
}

function Saludos4(){
    return <h2>Ayudenme!!</h2>;
}

/*root.recnsder(<h1>Hola mundo</h1>);*/
/*    <UserCard 
         name="Ramiro" 
         amount="{500}" 
         married={true} 
         points={(99,33.3,18,36.8)} 
         address={{street:"Av.10 Agosto", city: "Loja"}} 
    />
        <UserCard 
         name="Ramiro" 
         amount="{500}" 
         married={true} 
         points={(99,33.3,18,36.8)} 
         address={{street:"Av.10 Agosto", city: "Loja"}} 
    />
        <Button text="Aceptar" name="Manuel"/>
        <Button text="Regresar" name=" Diego"/>
        <Button text="Pagar" />
        <Button text="Recuperar" />
*/
root.render(
<>
    <Cabecera/>
    <Ingresar/>
</>
);