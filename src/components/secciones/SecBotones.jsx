import "../../styles/ui.css"
import Boton from "../ui/Boton"

const SecBotones = () => {
  return (
    <div className="nav botones">
      <Boton className="btn-borrar" nombreBtn={"Borrar Todo"}/>
      <Boton className="btn-visualizar" nombreBtn={"Visualizar"}/>
      <Boton className="btn-ejemplo" nombreBtn={"Ejemplo"}/>
    </div>
  )
}

export default SecBotones