import "../styles/secciones.css"
import Perfil from "./secciones/Perfil"
import SecBotones from "./secciones/SecBotones"
import NavSection from "./ui/NavSection"

const Secciones = () => {
  return (
    <div className="section">
      <NavSection />
      <Perfil />
      <SecBotones />
    </div>
  )
}

export default Secciones