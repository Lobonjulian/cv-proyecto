import "../../styles/secciones.css"
import Perfil from "../secciones/Perfil"
import SecBotones from "../secciones/SecBotones"
import NavSection from "../ui/NavSection"

const Editor = ({informationGeneral, informationManipulada }) => {
  return (
    <div className="section">
      <NavSection />
      <Perfil informationGeneral={informationGeneral} informationManipulada={informationManipulada}/>
      <SecBotones />
    </div>
  )
}

export default Editor