import DatosPreview from "./DatosPreview";

import "../../styles/preview.css";

const Preview = ({
  informationGeneralPreview,
  imgPerfilPreview,
  educationPreview,
  experienciaPreview,
  skillPreview,
}) => {
  return (
    <div className="preview">
      <header className="preview preview-header">
        <div className="preview preview-img">
          <img src={imgPerfilPreview} alt="logo" />
        </div>
        <header>
          <section className="preview">
            <h2 className="preview ">
              {informationGeneralPreview.nombres}{" "}
              {informationGeneralPreview.apellidos}
            </h2>
          </section>
          <section className="preview">
            <h3 className="preview">Perfil Profesional</h3>
            <p className="preview">
              {informationGeneralPreview.descriptionLaboral}
            </p>
          </section>
          <section className="preview">
            <h4 className="preview">contacto</h4>
            <div className="preview">
              <p className="preview">{informationGeneralPreview.telefono}</p>
              <p className="preview">{informationGeneralPreview.correo}</p>
            </div>
            <div className="preview">
              <p className="preview">{informationGeneralPreview.direction}</p>
              <p className="preview">{informationGeneralPreview.direction}</p>
            </div>
          </section>
        </header>
      </header>

      <section className="preview">
        <aside className="preview">lateral</aside>
        <main className="preview">
          <section className="preview">
            <div className="preview">
              {educationPreview.length !== 0 && (
                <DatosPreview titulo="Educación" datos={educationPreview} />
              )}

              {experienciaPreview.length !== 0 && (
                <DatosPreview titulo="Experiencia" datos={experienciaPreview} />
              )}

              {skillPreview.length !== 0 && (
                <DatosPreview titulo="Skills" datos={skillPreview} />
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Preview;
