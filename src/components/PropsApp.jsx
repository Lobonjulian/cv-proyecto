import { useState } from "react";
import { Information } from "../../utils/datos";
import Editor from "./editor/Editor";
import Preview from "./preview/Preview";

const PropsApp = () => {
  const [nombres, setNombres] = useState(Information.nombres);
  const [apellidos, setApellidos] = useState(Information.apellidos);
  const [profesion, setProfesion] = useState(Information.profesion);
  const [correo, setCorreo] = useState(Information.correo);
  const [telefono, setTelefono] = useState(Information.telefono);
  const [direction, setDirection] = useState(Information.direction);
  const [descriptionLaboral, setDescriptionLaboral] = useState(
    Information.perfilLaboral
  );
  const [imgPerfil, setImgPerfil] = useState("/perfilCV.avif");
  const [education, setEducation] = useState(Information.education);
  const [experiencia, setExperiencia] = useState(Information.experiencia);
  const [skill, setSkill] = useState(Information.skill);
  const [colorTexto, setColorTexto] = useState("#ffffff");
  const [colorFondo, setColorFondo] = useState("#ffffff");
  const [fuente, setFuente] = useState("serif");

  // Desestructuración y Manejo de los Estilos
  const estilosDatos = [colorTexto, colorFondo, fuente];
  const estilosManejo = [setColorTexto, setColorFondo, setFuente];

  const informationGeneral = {
    nombres,
    apellidos,
    profesion,
    correo,
    telefono,
    direction,
    descriptionLaboral,
  };

  // Manipulación de Eventos
  const manipularNombre = (newValor) => setNombres(newValor);
  const manipularApellido = (newValor) => setApellidos(newValor);
  const manipularProfesion = (newValor) => setProfesion(newValor);
  const manipularCorreo = (newValor) => setCorreo(newValor);
  const manipularTelefono = (newValor) => setTelefono(newValor);
  const manipularDirection = (newValor) => setDirection(newValor);
  const manipularDescription = (newValor) => setDescriptionLaboral(newValor);

  const informationManipulada = {
    manipularNombre,
    manipularApellido,
    manipularProfesion,
    manipularCorreo,
    manipularTelefono,
    manipularDirection,
    manipularDescription,
  };

  return (
    <main>
      <Editor
        informationGeneralEditor={informationGeneral}
        informationManipuladaEditor={informationManipulada}
        imgPerfilEditor={imgPerfil}
        cambiarImgPerfilEditor={setImgPerfil}
        educationEditor={education}
        cambiarEducationEditor={setEducation}
        experienciaEditor={experiencia}
        cambiarExperienciaEditor={setExperiencia}
        skillEditor={skill}
        cambiarSkillEditor={setSkill}
        estilosDatosEditor={estilosDatos}
        estilosManejosEditor={estilosManejo}
      />
      <Preview
        informationGeneralPreview={informationGeneral}
        imgPerfilPreview={imgPerfil}
        educationPreview={education}
        experienciaPreview={experiencia}
        skillPreview={skill}
      />
    </main>
  );
};

export default PropsApp;
