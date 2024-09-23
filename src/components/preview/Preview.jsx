import DatosPreview from "./DatosPreview";

const Preview = ({ informationGeneralPreview, educationPreview, experienciaPreview, skillPreview }) => {
  return (
    <div>
      <header>
        <div>
          <img src="https://via.placeholder.com/150" alt="logo" />
        </div>
        <header>
          <section>
            <h2>
              {informationGeneralPreview.nombres}{" "}
              {informationGeneralPreview.apellidos}
            </h2>
          </section>
          <section>
            <h3>Perfil Profesional</h3>
            <p>{informationGeneralPreview.descriptionLaboral}</p>
          </section>
          <section>
            <h4>contacto</h4>
            <div>
              <p>{informationGeneralPreview.telefono}</p>
              <p>{informationGeneralPreview.correo}</p>
            </div>
            <div>
              <p>{informationGeneralPreview.direction}</p>
              <p>{informationGeneralPreview.direction}</p>
            </div>
          </section>
        </header>
      </header>

      <section>
        <aside>lateral</aside>
        <main>
          <section>
            <div>
              {educationPreview.length !== 0 &&(
               <DatosPreview
                titulo="Educación"
                datos={educationPreview}
               />
              )}
              {experienciaPreview.length !== 0 &&(
               <DatosPreview
                titulo="Experiencia"
                datos={experienciaPreview}
               />
              )}
              {skillPreview.length !== 0 &&(
               <DatosPreview
                titulo="Skills"
                datos={skillPreview}
               />
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Preview;
