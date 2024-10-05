import InfoDatos from "./InfoDatosPreview";
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

        <header className="header-nombres ">
          <section>
            <h2 style={FuenteEstilo}>
              {informationGeneralPreview.nombres}
              {informationGeneralPreview.apellidos}
            </h2>
          </section>

          <section className="header-bio">
            <h3>Perfil Profesional</h3>
            <h4> {informationGeneralPreview.profesion}</h4>
            <p>{informationGeneralPreview.descriptionLaboral}</p>
          </section>

          <section className="header-contacto">
            <div className="header-contacto-titulo" style={{ backgroundColor: colorTexto }}>
              <h4 style={{ color: colorFondo }}>contacto</h4>
            </div>
            
            <div
              className="header-contacto-info"
              style={{ backgroundColor: colorFondo }}
            >
              <div
                className="header-contacto-info header-contacto-div"
                style={{ backgroundColor: colorTexto, color: colorFondo }}
              >
                <p className="header-contacto-p">
                  {<MdOutlinePhonelinkRing />}
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
        <InfoDatos
            titulo={"Idioma"}
            datos={idiomaPreview}
            estilos={{ backgroundColor: colorFondo, color: colorTexto }}
            ubicacion={"lateral"}
          />
          <InfoDatos
            titulo={"Skill"}
            datos={skillPreview}
            estilos={{ backgroundColor: colorFondo, color: colorTexto }}
            ubicacion={"lateral"}
          />
           <InfoDatos
            titulo={"Redes Sociales"}
            datos={redesPreview}
            estilos={{ backgroundColor: colorFondo, color: colorTexto }}
            ubicacion={"lateral"}
          />
        </aside>

        <main className="preview">
            <section className="main-section">
                <InfoDatos
                  titulo="Educación"
                  datos={educationPreview}
                  estilos={{ backgroundColor: colorTexto, color: colorFondo }}
                />
            
                <InfoDatos
                  titulo="Experiencia"
                  datos={experienciaPreview}
                  estilos={{ backgroundColor: colorTexto, color: colorFondo }}
                />

             
            <InfoDatos
            titulo={"Habilidades"}
            datos={skillPreview}
            estilos={{ backgroundColor: colorTexto , color: colorFondo  }}
          />
            </section>
        </main>
      </section>
    </div>
  );
};

export default Preview;
