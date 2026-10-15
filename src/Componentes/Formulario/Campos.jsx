export default function Campos({etiqueta, nombre, tipo, placeholder, valor, onCambio}) {
    return (
        <div>
            <label htmlFor={nombre}>{etiqueta}</label>
            <input 
              type={tipo}
              id={nombre}
              name={nombre}
              placeholder={placeholder}
              value={valor}
              onChange={onCambio}
              />
        </div>
    )
}
 