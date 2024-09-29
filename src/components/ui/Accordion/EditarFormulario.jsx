import { useState } from "react";

const EditarFormulario = ({ index, datos, onSubmit, onEditar }) => {
  const masDatos = datos[index];
  const [enCurso, setEnCurso] = useState(masDatos?.fechaFinal === "Actual");

  const alterarEnCurso = () => {
    setEnCurso(!enCurso);
  };

  return (
    <form onSubmit={(e) => onSubmit(e, index)} className="editar-formulario">
      <label className="inputText">
        <span>Institución:</span>
        <input
          name="institution"
          placeholder="Institution"
          required
        />
      </label>

      <label className="inputText">
        <span>Nombre:</span>
        <input
          name="nombre"
          placeholder="Ingeniería de Sistemas"
          required
        />
      </label>

      <label >
        <span>En Curso: </span>
        <input className="inputText checkbox" type="checkbox" checked={enCurso} onChange={alterarEnCurso} />
      </label>

     
        <label className="inputText">
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
          <label className="inputText">
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

      <label className="inputText">
        <span>Descripción:</span>
        <textarea
        className="textarea"
          name="description"
          placeholder="Este texto explora el impacto de la tecnología en la educación, analizando cómo las herramientas digitales transforman el aprendizaje. A través de estudios de caso y entrevistas."
          rows="10"
          cols="50"
        ></textarea>
      </label>

      <div className="botones">
        <button  className="btn-borrar" onClick={onEditar}>Cancelar</button>
        <button className="btn-ejemplo" type="submit">Guardar</button>
      </div>
    </form>
  );
};

export default EditarFormulario;