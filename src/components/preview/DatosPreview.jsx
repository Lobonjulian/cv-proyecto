const DatosPreview = ({ titulo, datos, estilo }) => {
  return (
    <section className="datos">
      <div className="datos-div-4" style={estilo}>
        <h4 className="">{titulo}</h4>
      </div>
      {titulo === "Habilidades" && (
        <div className="datos-ul datos-div habilidad">
          <p>Nombre</p>
          <p>Nivel</p>
          <p>Años de Experiencia</p>
        </div>
      )}
      <ul className="datos-ul">
        {datos.map((unidadDatos) => {
          if (titulo === "Habilidades") {
            return (
              <li key={unidadDatos.id}>
                <div className="datos-div ">
                  <h6 className="">{unidadDatos.nombre}</h6>
                  <p>{unidadDatos.porcentaje}%</p>
                  <p className="">{unidadDatos.anio}</p>
                </div>
              </li>
            );
          } else {
            return (
              <li key={unidadDatos.id}>
                <p className="">
                  <span className="badge" style={estilo}>
                    {unidadDatos.fechaInicio}
                  </span>
                  <span className="badge badge-final">
                    {unidadDatos.fechaFinal}
                  </span>
                </p>
                <div className="datos-div">
                  <h5 className="">{unidadDatos.institution}</h5>
                  <h6 className="">{unidadDatos.nombre}</h6>
                </div>
                <p className="">{unidadDatos.description}</p>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default DatosPreview;
