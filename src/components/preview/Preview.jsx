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
  idiomaPreview,
  redesPreview,
  estilosDatos,
  mostrarPreview,
}) => {
  if (!mostrarPreview) return;

  const [colorTexto, colorFondo, fuente] = estilosDatos;
  const FuenteEstilo = {
    fontFamily: fuente,
    backgroundColor: colorFondo,
    color: colorTexto,
  };

  return (
    <div className="preview" style={FuenteEstilo}>
      <header
        className="preview preview-header"
        style={{ backgroundColor: colorFondo, color: colorTexto }}
      >
        <div className="preview-img " style={{ backgroundColor: colorFondo }}>
          <div className=" triangulo">
            {imgPerfilPreview && (
              <img src={imgPerfilPreview} alt="imagen Perfil" />
            )}
          </div>
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
            <div className="triangulos" style={{ backgroundColor: colorTexto }}>
              <h4 style={{ color: colorFondo }}>contacto</h4>
            </div>
            <div
              className="header-contacto-div"
              style={{ backgroundColor: colorFondo }}
            >
              <div
                className="header-contacto-div"
                style={{ backgroundColor: colorTexto, color: colorFondo }}
              >
                <p className="header-contacto-p">
                  {" "}
                  {<MdOutlinePhonelinkRing />}{" "}
                  {informationGeneralPreview.telefono}
                </p>
                <p className="header-contacto-p">
                  {<MdMarkunread />} {informationGeneralPreview.correo}
                </p>
              </div>

              <div
                className="header-contacto-div"
                style={{ backgroundColor: colorTexto, color: colorFondo }}
              >
                <p className="header-contacto-p">
                  {<MdLanguage />} {informationGeneralPreview.correo}
                </p>
                <p className="header-contacto-p">
                  {<MdPinDrop />} {informationGeneralPreview.direction}
                </p>
              </div>
            </div>
          </section>
        </header>
      </header>

      <section className="preview-section">
        <aside
          className="preview lateral"
          style={{ backgroundColor: colorTexto, color: colorFondo }}
        >
           {skillPreview.length !== 0 && (
                <DatosPreview
                  titulo="Habilidades"
                  datos={skillPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
                />
              )}

           {idiomaPreview.length !== 0 && (
                <DatosPreview
                  titulo="Idioma"
                  datos={idiomaPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
                />
              )}
              {redesPreview.length !== 0 && (
                <DatosPreview
                  titulo="Redes Sociales"
                  datos={redesPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
                />
              )}
         
        </aside>

        <main className="main">
          <section className="main-section">
            <div className="main-section-div">
              {educationPreview.length !== 0 && (
                <DatosPreview
                  titulo="Educación"
                  datos={educationPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
                />
              )}

              {experienciaPreview.length !== 0 && (
                <DatosPreview
                  titulo="Experiencia"
                  datos={experienciaPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
                />
              )}

              {skillPreview.length !== 0 && (
                <DatosPreview
                  titulo="Habilidades"
                  datos={skillPreview}
                  estilo={{ backgroundColor: colorTexto, color: colorFondo }}
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
