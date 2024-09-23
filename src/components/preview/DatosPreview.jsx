const DatosPreview = ({ titulo, datos, }) => {
  return (
    <section>
      <h4>{titulo}</h4>
      <ul>
      {
        datos.map((unidadDatos) => {
          return (
          <li key={unidadDatos.id}>
          <p>{unidadDatos.fechaInicio} - {unidadDatos.fechaFinal}</p>
            <h4>{unidadDatos.institution}</h4>
            <h5>{unidadDatos.nombre}</h5>
            <p>{unidadDatos.description}</p>
          </li>

          )
        }
        )
      }
      </ul>
    </section>
  );
}

export default DatosPreview;
