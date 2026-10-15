import { Link } from "react-router-dom"
import B from "../../asset/boton1.png"

export default function Boton() {
    return (
        <Link to="/Formulario"><img className="boton" src={B} alt="Boton" /></Link>
    )
}