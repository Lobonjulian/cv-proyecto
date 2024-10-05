const DatosPreview = ({ titulo, datos, estilo, ubicacion }) => {

  return (
    <section className="preview datos">
      <div className="datos-titulo" style={estilo}>
        <h4>{titulo}</h4>
      </div>
      {titulo === "Habilidades" && (
        <div className="datos-ul datos-div habilidad">
          <h5 className="datos-div-titulo" >Nombre</h5>
          <h5 className="datos-div-titulo">Nivel</h5>
          <h5 className="datos-div-titulo" >Años de Experiencia</h5>
        </div>
      )}
      <ul className="datos-ul">
        {datos.map((unidadDatos) => {
          if (titulo === "Habilidades") {
            return (
              <li key={unidadDatos.id}>
                <div className="datos-div">
                  <h5 className="datos-div-titulo">{unidadDatos.nombre}</h5>
                  <p className="datos-div-titulo">{unidadDatos.porcentaje}%</p>
                  <h5 className="datos-div-titulo">{unidadDatos.anio}</h5>
                </div>
              </li>
            );
          } else if (ubicacion === "lateral") {
            return (
              <li key={unidadDatos.id}>
              <div className="datos-div lateral">
                  <h6 className="">{unidadDatos.nombre}</h6>
                  </div>
              </li>
              );
        } else {
            return (
              <li key={unidadDatos.id}>
                <p>
                  <span className="badge" style={estilo}>
                    {unidadDatos.fechaInicio}
                  </span>
                  <span className="badge badge-final">
                    {unidadDatos.fechaFinal}
                  </span>
                </p>
                <div className="datos-div">
                  <h5>{unidadDatos.institution}</h5>
                  <h6>{unidadDatos.nombre}</h6>
                </div>
                <p>{unidadDatos.description}</p>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default DatosPreview;
