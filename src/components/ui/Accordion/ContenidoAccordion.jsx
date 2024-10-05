const ContenidoAccordion = ({
  titulo,
  datos,
  cambiarDatos,
  onEditar,
  setEnviarFormulario,
}) => {
  return (
    <div  className="editar-formulario" id={titulo.toLowerCase()} aria-labelledby={titulo.toLowerCase()}>
      <ul>
        {datos.map((unidadDatos, index) => (
          <ElementosListaDatos
            key={unidadDatos.id}
            listaDatos={datos.id}
            index={index}
            unidadDatos={unidadDatos}
            cambiarDatos={cambiarDatos}
            onEditar={onEditar}
            setEnviarFormulario={setEnviarFormulario}
          />
        ))}
      </ul>
      <button
        className="btn-ejemplo"
        onClick={() => {
          onEditar();
          setEnviarFormulario(-1);
        }}
      >
        Agregar - {titulo}
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
    <li className="elemento-listas">
      <span>{unidadDatos.nombre}</span>
      <div>
        <button
          className="btn-ejemplo"
          onClick={() => {
            onEditar(index.id); setEnviarFormulario(index);
          }}
        >
          Editar Datos
        </button>
        <button
          className="btn-borrar"
          onClick={() => eliminarDatos(listaDatos, index)}
        >
          Eliminar Datos
        </button>
      </div>
    </li>
  );
};

export default ContenidoAccordion;

