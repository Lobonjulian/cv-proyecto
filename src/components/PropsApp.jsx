import { useState } from "react";
import { Information } from "../../utils/datos";
import Editor from "./editor/Editor"
import Preview from "./Preview"


const PropsApp = () => {
  const [nombres, setNombres] = useState(Information.nombres);
  const [apellidos, setApellidos] = useState(Information.apellidos);
  const [profesion, setProfesion] = useState(Information.profesion);
  const [correo, setCorreo] = useState(Information.correo);
  const [telefono, setTelefono] = useState(Information.telefono);
  const [direction, setDirection] = useState(Information.direction);
  

const informationGeneral = {
  nombres,
  apellidos,
  profesion,
  correo,
  telefono,
  direction,
}

// Manipulación de Eventos
const manipularNombre = (newValor) => setNombres(newValor);
const manipularApellido = (newValor) => setApellidos(newValor);
const manipularProfesion = (newValor) => setProfesion(newValor);
const manipularCorreo = (newValor) => setCorreo(newValor);
const manipularTelefono = (newValor) => setTelefono(newValor);
const manipularDirection = (newValor) => setDirection(newValor); 

const informationManipulada =
 {
  manipularNombre,
  manipularApellido,
  manipularProfesion,
  manipularCorreo,
  manipularTelefono,
  manipularDirection,
}


  return (
    <main>
      <Editor informationGeneral={informationGeneral} informationManipulada={informationManipulada}/>
      <Preview />
    </main>
  );
}

export default PropsApp;
