const DatosPreview = ({ titulo, datos }) => {
  return (
    <section className="datos">
      <h4 className="">{titulo}</h4>
      <ul className="datos-ul">
        {datos.map((unidadDatos) => {
          return (
            <li key={unidadDatos.id}>
              <p className="">
                <span className="badge">{unidadDatos.fechaInicio}</span><span className="badge badge-final">{unidadDatos.fechaFinal}</span>
              </p>
              <div className="datos-div">
              <h5 className="">{unidadDatos.institution}</h5>
              <h6 className="">{unidadDatos.nombre}</h6>
              </div>
              <p className="">{unidadDatos.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default DatosPreview;
