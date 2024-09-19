import { Information } from "../../utils/datos"
import "../styles/secciones.css"
import Perfil from "./secciones/Perfil"
import SecBotones from "./secciones/SecBotones"
import NavSection from "./ui/NavSection"

const Editor = () => {
  return (
    <div className="section">
      <NavSection />
      <Perfil informationGeneral={Information} informationManipulada={Information}/>
      <SecBotones />
    </div>
  )
}

export default Editor