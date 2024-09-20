import { useState } from "react"
import SecBotones from "../secciones/SecBotones"
import NavSection from "../ui/NavSection"
import EditorNavLinks from "./EditorNavLinks"

import "../../styles/secciones.css"

const Editor = ({informationGeneralEditor, informationManipuladaEditor }) => {
  const [actual, setActual] = useState(0);
  const cambioLink = (index) =>  setActual(index)

  return (
    <div className="section">
      <NavSection actualNavSection={actual} cambioLinkNavSection={cambioLink}/>
      <EditorNavLinks informationGeneralNavLink={informationGeneralEditor} informationManipuladaNavLink={informationManipuladaEditor} linkActualNavLink={actual} />
      <SecBotones />
    </div>
  )
}

export default Editor