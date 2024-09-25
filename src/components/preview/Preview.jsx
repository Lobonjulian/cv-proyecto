import DatosPreview from "./DatosPreview";

import "../../styles/preview.css";
import {
  MdLanguage,
  MdMarkunread,
  MdOutlinePhonelinkRing,
  MdPinDrop,
} from "react-icons/md";

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
        <div className="preview preview-img triangulo">
          <img src={imgPerfilPreview} alt="logo" />
        </div>

        <header className="preview-section header-nombres ">
          <section className="preview preview-header-header-section">
            <h2 className="preview">
              {informationGeneralPreview.nombres}{" "}
              {informationGeneralPreview.apellidos}
            </h2>
          </section>

          <section className="header-bio">
            <h3 className="">Perfil Profesional</h3>
            <p className="">{informationGeneralPreview.descriptionLaboral}</p>
          </section>

          <section className="header-contacto">
            <span className="triangulo">
              <h4 className="">contacto</h4>
            </span>
            <div className="header-contacto-div">
              <div className="header-contacto-div">
                <p className="">
                  {" "}
                  {<MdOutlinePhonelinkRing />}{" "}
                  {informationGeneralPreview.telefono}
                </p>
                <p className="">
                  {<MdMarkunread />} {informationGeneralPreview.correo}
                </p>
              </div>

              <div className="header-contacto-div">
                <p className="">
                  {<MdLanguage />} {informationGeneralPreview.direction}
                </p>
                <p className="">
                  {<MdPinDrop />} {informationGeneralPreview.direction}
                </p>
              </div>
            </div>
          </section>
        </header>
      </header>

      <section className="preview-section">
        <aside className="preview lateral">
          {/* version preliminar*/}
          {skillPreview.length !== 0 && (
            <DatosPreview titulo="Habilidades" datos={skillPreview} />
          )}
          {skillPreview.length !== 0 && (
            <DatosPreview titulo="Habilidades" datos={skillPreview} />
          )}
          {skillPreview.length !== 0 && (
            <DatosPreview titulo="Habilidades" datos={skillPreview} />
          )}
        </aside>
        <main className="main">
          <section className="">
            <div className="">
              {educationPreview.length !== 0 && (
                <DatosPreview titulo="Educación" datos={educationPreview} />
              )}

              {experienciaPreview.length !== 0 && (
                <DatosPreview titulo="Experiencia" datos={experienciaPreview} />
              )}

              {skillPreview.length !== 0 && (
                <DatosPreview titulo="Habilidades" datos={skillPreview} />
              )}
            </div>
          </section>
        </main>
      </section>
    </div>
  );
};

export default Preview;
