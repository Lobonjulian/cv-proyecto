import "../../styles/secciones.css";
import { RiFontMono, RiFontSans, RiFontSansSerif } from "react-icons/ri";

const Configuration = ({estilosDatosConfig, estilosManejosConfig}) => {
  const [colorTexto, colorFondo] = estilosDatosConfig
  const [setColorTexto, setColorFondo, setFuente] = estilosManejosConfig 

  return (
    <div className="section">
      <h3 className="section-titulo">Configuración General</h3>
      <section className="config">
        <h4 className="section-titulo section-titulo-h4">Color</h4>
        <label>
          Selecciona el Color del Texto:
          <input
            type="color"
            value={colorTexto}
            onChange={(e) => setColorTexto(e.target.value)}
          />
        </label>

        <label>
          Selecciona el tu Color del Fondo:
          <input
            type="color"
            value={colorFondo}
            onChange={(e) => setColorFondo(e.target.value)}
          />
        </label>
      </section>
      <section className="config">
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
