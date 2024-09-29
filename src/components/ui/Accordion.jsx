import { useState } from "react";
import { v4 as uuid4 } from "uuid";

import EditarFormulario from "./Accordion/EditarFormulario";
import Titulo from "./Accordion/Titulo";
import ContenidoAccordion from "./Accordion/ContenidoAccordion";

const Accordion = ({
  titulo,
  index,
  datos,
  cambiarDatos,
  abrirAccordion,
  cerrarAccordion,
}) => {
  const [editarOpen, setEditarOpen] = useState(false);
  const [enviarFormulario, setEnviarFormulario] = useState(-1);

  const manejoEditar = () => {
    setEditarOpen(!editarOpen);
  };

  const enviarNuevaInfo = (e) => {
    e.preventDefault();

    const formulario = e.target;
    const formularioDatos = new FormData(formulario);
    const formularioJson = Object.fromEntries(formularioDatos.entries());

    formularioJson.id = uuid4();
    if (!formularioJson.fechaFinal) {
      formularioJson.fechaFinal = "Actual";
    }
    cambiarDatos([...datos, formularioJson]);
    manejoEditar();
  };
  const enviarFormularioEditado = (e, index) => {
    e.preventDefault();

    const formulario = e.target;
    const formularioDatos = new FormData(formulario);
    const formularioJson = Object.fromEntries(formularioDatos.entries());

    formularioJson.id = datos[index].id;
    if (!formularioJson.fechaFinal) {
      formularioJson.fechaFinal = "Actual";
    }
    cambiarDatos([
      ...datos.slice(0, index),
      formularioJson,
      ...datos.slice(index + 1),
    ]);
    manejoEditar();
  };

  const onSubmit =
    enviarFormulario === -1 ? enviarNuevaInfo : enviarFormularioEditado;

  return (
    <div>
      <Titulo
        titulo={titulo}
        index={index}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
      {abrirAccordion === index && !editarOpen && (
        <ContenidoAccordion
          titulo={titulo}
          datos={datos}
          cambiarDatos={cambiarDatos}
          onEditar={manejoEditar}
          setEnviarFormulario={setEnviarFormulario}
        />
      )}
      {abrirAccordion === index && editarOpen && (
        <EditarFormulario
          index={index}
          onSubmit={onSubmit}
          datos={datos}
          onEditar={manejoEditar}
        />
      )}
    </div>
  );
};

export default Accordion;