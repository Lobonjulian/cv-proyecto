import { useState } from "react";
import SecBotones from "../secciones/SecBotones";
import NavSection from "../ui/NavSection";
import EditorNavLinks from "./EditorNavLinks";

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
  estilosDatosEditor,
  estilosManejosEditor,
}) => {
  const [actual, setActual] = useState(0);
  const cambioLink = (index) => setActual(index);

  return (
    <div className="section">
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
        estilosDatosNavLink={estilosDatosEditor}
        estilosManejosNavLink={estilosManejosEditor}
      />
      <SecBotones />
    </div>
  );
};

export default Editor;
