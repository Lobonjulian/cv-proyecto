import "../../styles/secciones.css";
import { RiFontMono, RiFontSans, RiFontSansSerif } from "react-icons/ri";

const Configuration = ({estilosDatosConfig, estilosManejosConfig}) => {
  const [colorTexto, colorFondo] = estilosDatosConfig
  const [setColorTexto, setColorFondo, setFuente] = estilosManejosConfig 

  return (
    <div className="section">
      <h3 className="section-titulo">Configuración General</h3>
      <section className="section">
        <h4 className="section-titulo section-titulo-h4">Color texto</h4>
        <label>
          Selecciona el tu color Favorito
          <input
            type="color"
            value={colorTexto}
            onChange={(e) => setColorTexto(e.target.value)}
          />
        </label>

        <h4 className="section-titulo section-titulo-h4 ">Color fondo</h4>
        <label>
          Selecciona el tu color Favorito
          <input
            type="color"
            value={colorFondo}
            onChange={(e) => setColorFondo(e.target.value)}
          />
        </label>
      </section>
      <section className="section">
        <h4 className="section-titulo section-titulo-h4">Fuente</h4>
        <div>
          <button onClick={() => setFuente("Open Sans")}>
            <span>
              <RiFontMono />
            </span>
            <span>Mono</span>
          </button>
          <button onClick={() => setFuente("Open Sans")}>
            <span>
              <RiFontSans />
            </span>
            <span>Sans</span>
          </button>
          <button onClick={() => setFuente("Open Sans")}>
            <span>
              <RiFontSansSerif />
            </span>
            <span>SansSerif</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Configuration;
