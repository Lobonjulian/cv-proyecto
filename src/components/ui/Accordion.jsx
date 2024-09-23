import { useState } from "react";
import { v4 as uuid4 } from "uuid"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md";

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

    const formulario = e.target
    const formularioDatos = new formularioDatos(formulario)
    const formularioJson = Object.fromEntries(formularioDatos.entries())

    formularioJson.id = uuid4()
    if (!formularioJson.fechaFinal) {
      formularioJson.fechaFinal = "Actual"
    }
    cambiarDatos([...datos, formularioJson])
    manejoEditar()
  }
 const enviarFormularioEditado = (e, index) => {
  e.preventDefault();

  const formulario = e.target
  const formularioDatos = new formularioDatos(formulario)
  const formularioJson = Object.fromEntries(formularioDatos.entries())

  formularioJson.id = datos[index].id
  if (!formularioJson.fechaFinal) {
    formularioJson.fechaFinal = "Actual"
  }
  cambiarDatos([...datos.slice(0, index), formularioJson, ...datos.slice(index + 1)])
  manejoEditar()
 }

 const onSubmit = enviarFormulario === -1 ? enviarNuevaInfo : enviarFormularioEditado

  return (
  <div>
    <Titulo titulo={titulo} index={index} abrirAccordion={abrirAccordion} cerrarAccordion={cerrarAccordion} />
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
)
};

const Titulo = ({ titulo, index, abrirAccordion, cerrarAccordion }) => {
  const isAbrir = abrirAccordion === index;
  return (
    <h4>
      <button
        id={titulo.toLowerCase()}
        aria-expanded={isAbrir}
        aria-controls={titulo.toLowerCase()}
        onClick={() => cerrarAccordion(index)}
      >
        {titulo}{" "}
        {isAbrir ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
      </button>
    </h4>
  );
};

const ContenidoAccordion = ({
  titulo,
  datos,
  cambiarDatos,
  onEditar,
  setEnviarFormulario,
}) => {
  return (
    <div id={titulo.toLowerCase()} aria-labelledby={titulo.toLowerCase()}>
      <ul>
        {datos.map((unidadDatos, index) => (
          <ElementosListaDatos
            key={unidadDatos.id}
            listaDatos={datos}
            index={index}
            unidadDatos={unidadDatos}
            cambiarDatos={cambiarDatos}
            onEditar={onEditar}
            setEnviarFormulario={setEnviarFormulario}
          />
        ))}
      </ul>
      <button
        onClick={() => {
          onEditar();
          setEnviarFormulario(-1);
        }}
      >
        Agregar - {titulo}{" "}
      </button>
    </div>
  );
};

const ElementosListaDatos = ({
  unidadDatos,
  listaDatos,
  index,
  cambiarDatos,
  onEditar,
  setEnviarFormulario,
}) => {
  const eliminarDatos = (listaDatos) => {
    const nuevaListaDatos = [
      ...listaDatos.slice(0, index),
      ...listaDatos.slice(index + 1),
    ];
    cambiarDatos(nuevaListaDatos);
  };
  return (
    <li>
      <span>{unidadDatos.nombre}</span>
      <div>
        <button
          onClick={() => {
            onEditar, setEnviarFormulario(index);
          }}
        >
          Editar Datos
        </button>
        <button onClick={() => eliminarDatos(unidadDatos, listaDatos)}>
          Eliminar Datos
        </button>
      </div>
    </li>
  );
};

const EditarFormulario = ({ index, datos, onSubmit, onEditar }) => {
  const masDatos = datos[index];
  const [enCurso, setEnCurso] = useState(masDatos?.fechaFinal === "Actual");

  const alterarEnCurso = () => {
    setEnCurso(!enCurso);
  };

  return (
    <form onSubmit={(e) => onSubmit(e, index)}>
      <label>
        <span>Institución:</span>
        <input
          name="institution"
          placeholder="Institution"
          defaultValue={masDatos?.institution}
          required
        />
      </label>

      <label>
        <span>Nombre o Grado:</span>
        <input
          name="nombre"
          placeholder="11"
          defaultValue={masDatos?.nombre}
          required
        />
      </label>

      <label>
        <span>En Curso: </span>
        <input type="checkbox" checked={enCurso} onChange={alterarEnCurso} />
      </label>

      <div>
        <label>
          <span>Fecha de Inicio: </span>
          <input
            name="fechaInicio"
            type="month"
            placeholder="2016-05"
            defaultValue={masDatos?.fechaInicio}
            required
          />
        </label>
        {!enCurso && (
          <label>
            <span>Fecha de Finalización: </span>
            <input
              name="fechaFinal"
              type="month"
              placeholder="2019-12"
              defaultValue={masDatos?.fechaFinal !== "Actual"}
              required
            />
          </label>
        )}
      </div>

      <label>
        <span>Descripción:</span>
        <textarea
          name="description"
          placeholder="Descripción"
          defaultValue={masDatos?.description}
        ></textarea>
      </label>

      <div>
        <button onClick={onEditar}>Cancelar</button>
        <button type="submit">Guardar</button>
      </div>
    </form>
  );
};



export default Accordion;
