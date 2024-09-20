import Perfil from "../secciones/Perfil";
import Imagen from "../secciones/Imagen";
import Contenido from "../secciones/Contenido";
import Configuration from "../secciones/Configuration";

const EditorNavLinks = ({linkActualNavLink, informationGeneralNavLink, informationManipuladaNavLink}) => {

 switch (linkActualNavLink) {
  case 0: {
   return (
     <Perfil informationGeneralPerfil={informationGeneralNavLink} informationManipuladaPerfil={informationManipuladaNavLink}/>
   )
  }
  case 1: {
    return (
      <Imagen />
    )
  }
  case 2: {
    return (
      <Contenido />
    )
  }
  case 3: {
    return (
      <Configuration />
    )
  }
  default:
    break;
 }

}

export default EditorNavLinks;
