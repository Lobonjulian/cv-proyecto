import { Information } from "../../../utils/datos";
import Boton from "../ui/Boton";
const EditorBotones = ({
  informationManipuladaBoton,
  cambiarImgPerfilBoton,
  cambiarEducationBoton,
  cambiarExperienciaBoton,
  cambiarSkillBoton,
  mostrarPreviewBoton,
  setMostrarPreviewBoton,
}) => {
  const EnviarEJemplo = () => {
    informationManipuladaBoton.manipularNombre(Information.nombres);
    informationManipuladaBoton.manipularApellido(Information.apellidos);
    informationManipuladaBoton.manipularDescription(Information.perfilLaboral);
    informationManipuladaBoton.manipularCorreo(Information.correo);
    informationManipuladaBoton.manipularDirection(Information.direction);
    informationManipuladaBoton.manipularDirection(Information.telefono);
    cambiarImgPerfilBoton(Information.imagenPerfil)
    cambiarEducationBoton(Information.education)
    cambiarExperienciaBoton(Information.experiencia)
    cambiarSkillBoton(Information.skill)
  };

  const BorrarPreview = () => {
    cambiarImgPerfilBoton("")
    Object.values(informationManipuladaBoton).forEach((manipular) => {
      manipular("");
    });
    cambiarEducationBoton([])
    cambiarExperienciaBoton([])
    cambiarSkillBoton([])
  };

  return (
    <div className="nav botones">
      <Boton
        className="btn-borrar"
        nombreBtn={"Borrar Todo"}
        onClick={() => BorrarPreview()}
      />
      <Boton className="btn-visualizar" nombreBtn={"Visualizar"} onClick={() => setMostrarPreviewBoton(!mostrarPreviewBoton)} />
      <Boton className="btn-ejemplo" nombreBtn={"Ejemplo"} onClick={() =>  EnviarEJemplo()} />
    </div>
  );
};

export default EditorBotones;
