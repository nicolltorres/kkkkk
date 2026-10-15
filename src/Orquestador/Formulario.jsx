import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from "./Tarjeta";
import "../Style/Formulario.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Entradas=[
    {nombre:"titulo", tipo:"text", placeholder:"Titulo"},
    {nombre:"imagen", tipo:"text", placeholder:" imagen"},
    {nombre:"descripcion", tipo:"text", placeholder:"Descripción"},
    {nombre:"color", tipo:"text", placeholder:"Color"}
]
const inicial={titulo:'', imagen:'', descripcion:'', color:'' }
export default function Formulario() {
    const navigate=useNavigate()
    const [datos,setDatos]=useState(inicial)
    const cambiar=(e)=>{
        setDatos({...datos,[e.target.name]:e.target.value})
    }
    const Botones=[
    {tipo:"submit", nombre:"Enviar"},
    {tipo:"button", nombre:"Volver", onClick:()=>navigate('/Tar')},
    {tipo:"reset", nombre:"Reset"}
]
    return (
        <div className="pagina-formulario">

            <form className="formulario">
                {Entradas.map((campos)=>(
                    <Campos
                        key={campos.nombre}
                        etiqueta={campos.nombre}
                        nombre={campos.nombre}
                        tipo={campos.tipo}
                        placeholder={campos.placeholder}
                        valor ={datos[campos.nombre]}
                        onCambio={cambiar}
                    />
                ))}
                {Botones.map((boton)=>( 
                   <Boton
                    key={boton.nombre}
                    tipo={boton.tipo}
                    nombre={boton.nombre}
                    onClick={boton.onClick}
                   />
                ))}
               
            </form>
            <Tarjeta
              title={datos.titulo}
              descripcion={datos.descripcion}
              img={datos.imagen}
              color={datos.color}
              />
        </div>
    )
}