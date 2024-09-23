const DatosPreview = ({ titulo, datos }) => {
  return (
    <section className="preview">
      <h4 className="preview">{titulo}</h4>
      <ul className="preview">
        {datos.map((unidadDatos) => {
          return (
            <li key={unidadDatos.id}>
              <p className="preview">
                {unidadDatos.fechaInicio} - {unidadDatos.fechaFinal}
              </p>
              <h4 className="preview">{unidadDatos.institution}</h4>
              <h5 className="preview">{unidadDatos.nombre}</h5>
              <p className="preview">{unidadDatos.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DatosPreview;
