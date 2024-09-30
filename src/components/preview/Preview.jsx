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
  estilosDatos,
  mostrarPreview,
}) => {
  
  if (!mostrarPreview) return; 

  const [colorTexto, colorFondo, fuente] = estilosDatos ;
  const FuenteEstilo = { fontFamily: fuente, fontSize: "1rem", backgroundColor: colorFondo, color: colorTexto};
  

  return (
    <div className="preview" style={FuenteEstilo}>
      <header className="preview preview-header" style={{ backgroundColor: colorFondo, color: colorTexto }}>
        <div className="preview-img triangulo"  style={{ backgroundColor: colorFondo }} >
          { imgPerfilPreview && <img src={imgPerfilPreview} alt="imagen Perfil" /> }
        </div>

        <header className="preview-section header-nombres ">
          <section className="preview preview-header-header-section">
            <h2 className="preview" style={FuenteEstilo}>
              {informationGeneralPreview.nombres}{" "}
              {informationGeneralPreview.apellidos}
            </h2>
          </section>

          <section className="header-bio">
            <h3 className="">Perfil Profesional</h3>
            <h4> {informationGeneralPreview.profesion}</h4>
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
            <DatosPreview titulo="Comunicaciones" datos={skillPreview} />
          )}
          {skillPreview.length !== 0 && (
            <DatosPreview titulo="idioma" datos={skillPreview} />
          )}
          {skillPreview.length !== 0 && (
            <DatosPreview titulo="Redes" datos={skillPreview} />
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
