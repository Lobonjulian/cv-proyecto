import { Information } from "../../../utils/datos";
import Boton from "../ui/Boton";

const EditorBotones = ({
  informationManipuladaBoton,
  cambiarImgPerfilBoton,
  cambiarEducationBoton,
  cambiarExperienciaBoton,
  cambiarSkillBoton,
  cambiarIdiomaBoton,
  cambiarRedesBoton,
  mostrarPreviewBoton,
  setMostrarPreviewBoton,
}) => {
  const EnviarEJemplo = () => {
    informationManipuladaBoton.manipularNombre(Information.nombres);
    informationManipuladaBoton.manipularApellido(Information.apellidos);
    informationManipuladaBoton.manipularProfesion(Information.profesion);
    informationManipuladaBoton.manipularDescription(Information.perfilLaboral);
    informationManipuladaBoton.manipularCorreo(Information.correo);
    informationManipuladaBoton.manipularTelefono(Information.telefono);
    informationManipuladaBoton.manipularDirection(Information.direction);
    cambiarImgPerfilBoton(Information.imagenPerfil);
    cambiarEducationBoton(Information.education);
    cambiarExperienciaBoton(Information.experiencia);
    cambiarSkillBoton(Information.skill);
    cambiarIdiomaBoton(Information.idioma);
    cambiarRedesBoton(Information.redes);
  };

  const BorrarPreview = () => {
    cambiarImgPerfilBoton("");
    Object.values(informationManipuladaBoton).forEach((manipular) => {
      manipular("");
    });
    cambiarEducationBoton([]);
    cambiarExperienciaBoton([]);
    cambiarSkillBoton([]);
    cambiarIdiomaBoton([])
    cambiarRedesBoton([])
  };

  return (
    <div className="nav botones">
      <Boton
        className="btn-ejemplo"
        nombreBtn={"Ejemplo"}
        handleClick={() => EnviarEJemplo()}
      />

      <Boton
        className="btn-visualizar"
        nombreBtn={"Visualizar"}
        handleClick={() => setMostrarPreviewBoton(!mostrarPreviewBoton)}
      />

      <Boton
        className="btn-borrar"
        nombreBtn={"Borrar Todo"}
        handleClick={() => BorrarPreview()}
      />
    </div>
  );
};

export default EditorBotones;
