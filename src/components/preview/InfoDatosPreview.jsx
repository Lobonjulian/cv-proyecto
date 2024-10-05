import DatosPreview from "./DatosPreview";

const InfoDatos = ({ datos, estilos, titulo, ubicacion="main" }) => {

  return (
    <section className="education-section">
    {datos.length !== 0 && (
      <DatosPreview
                  titulo={titulo}
                  datos={datos}
                  estilo={estilos}
                 ubicacion={ubicacion}
                />
      )}
            
    </section>
  );
}

export default InfoDatos;