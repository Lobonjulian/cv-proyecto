import Perfil from "../secciones/Perfil";
import Imagen from "../secciones/Imagen";
import Contenido from "../secciones/Contenido";
import Configuration from "../secciones/Configuration";
import { useState } from "react";

const EditorNavLinks = ({
  linkActualNavLink,
  informationGeneralNavLink,
  informationManipuladaNavLink,
  imgPerfilNavLink,
  cambiarImgPerfilNavLink,
  educationNavLink,
  experienciaNavLink,
  skillNavLink,
  idiomaNavLink,
  redesNavLink,
  cambiarEducationNavLink,
  cambiarExperienciaNavLink,
  cambiarSkillNavLink,
  cambiarIdiomaNavLink,
  cambiarRedesNavLink,
  estilosDatosNavLink,
  estilosManejosNavLink,
}) => {
  const [aperturaAccordion, setAperturaAccordion] = useState(null);
  const clausuraAccordion = (abrirSectionAccordion) => {
    if (abrirSectionAccordion === aperturaAccordion) {
      setAperturaAccordion(null);
      return;
    }
    setAperturaAccordion(abrirSectionAccordion);
  };

  switch (linkActualNavLink) {
    case 0: {
      return (
        <Perfil
          informationGeneralPerfil={informationGeneralNavLink}
          informationManipuladaPerfil={informationManipuladaNavLink}
        />
      );
    }
    case 1: {
      return (
        <Imagen
          imgPerfilImagen={imgPerfilNavLink}
          cambiarImgPerfilImagen={cambiarImgPerfilNavLink}
        />
      );
    }
    case 2: {
      return (
        <Contenido
          education={educationNavLink}
          experiencia={experienciaNavLink}
          skill={skillNavLink}
          idioma={idiomaNavLink}
          redes={redesNavLink}
          cambiarEducation={cambiarEducationNavLink}
          cambiarExperiencia={cambiarExperienciaNavLink}
          cambiarSkill={cambiarSkillNavLink}
          cambiarIdioma={cambiarIdiomaNavLink}
          cambiarRedes={cambiarRedesNavLink}
          abrirAccordion={aperturaAccordion}
          cerrarAccordion={clausuraAccordion}
        />
      );
    }
    case 3: {
      return (
        <Configuration
          estilosDatosConfig={estilosDatosNavLink}
          estilosManejosConfig={estilosManejosNavLink}
        />
      );
    }
    default:
      break;
  }
};

export default EditorNavLinks;
