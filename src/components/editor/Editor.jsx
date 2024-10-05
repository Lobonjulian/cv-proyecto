import { useState } from "react";
import NavSection from "../ui/NavSection";
import EditorNavLinks from "./EditorNavLinks";
import EditorBotones from "./EditorBotones";

import "../../styles/secciones.css";

const Editor = ({
  informationGeneralEditor,
  informationManipuladaEditor,
  imgPerfilEditor,
  cambiarImgPerfilEditor,
  educationEditor,
  cambiarEducationEditor,
  experienciaEditor,
  cambiarExperienciaEditor,
  skillEditor,
  cambiarSkillEditor,
  idiomaEditor,
  cambiarIdiomaEditor,
  redesEditor,
  cambiarRedesEditor,
  estilosDatosEditor,
  estilosManejosEditor,
  mostrarPreviewEditor,
  setMostrarPreviewEditor,
}) => {
  const [actual, setActual] = useState(0);
  const cambioLink = (index) => setActual(index);

  return (
    <div className="editor">
      <NavSection actualNavSection={actual} cambioLinkNavSection={cambioLink} />
      <EditorNavLinks
        informationGeneralNavLink={informationGeneralEditor}
        informationManipuladaNavLink={informationManipuladaEditor}
        linkActualNavLink={actual}
        imgPerfilNavLink={imgPerfilEditor}
        cambiarImgPerfilNavLink={cambiarImgPerfilEditor}
        educationNavLink={educationEditor}
        cambiarEducationNavLink={cambiarEducationEditor}
        experienciaNavLink={experienciaEditor}
        cambiarExperienciaNavLink={cambiarExperienciaEditor}
        skillNavLink={skillEditor}
        cambiarSkillNavLink={cambiarSkillEditor}
        idiomaNavLink={idiomaEditor}
        cambiarIdiomaNavLink={cambiarIdiomaEditor}
        redesNavLink={redesEditor}
        cambiarRedesNavLink={cambiarRedesEditor}
        estilosDatosNavLink={estilosDatosEditor}
        estilosManejosNavLink={estilosManejosEditor}
      />
      <EditorBotones
        informationManipuladaBoton={informationManipuladaEditor}
        cambiarImgPerfilBoton={cambiarImgPerfilEditor}
        cambiarEducationBoton={cambiarEducationEditor}
        cambiarExperienciaBoton={cambiarExperienciaEditor}
        cambiarSkillBoton={cambiarSkillEditor}
        cambiarIdiomaBoton={cambiarIdiomaEditor}
        cambiarRedesBoton={cambiarRedesEditor}
        mostrarPreviewBoton={mostrarPreviewEditor}
        setMostrarPreviewBoton={setMostrarPreviewEditor}
      />
    </div>
  );
};

export default Editor;
