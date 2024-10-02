import "../../styles/secciones.css";
import { RiFontMono, RiFontSans, RiFontSansSerif } from "react-icons/ri";

const Configuration = ({ estilosDatosConfig, estilosManejosConfig }) => {
  const [colorTexto, colorFondo] = estilosDatosConfig;
  const [setColorTexto, setColorFondo, setFuente] = estilosManejosConfig;

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
        <div className="config config-fuentes">
          <BotonIcono
            nombreBtn={"Mono"}
            icono={<RiFontMono />}
            handleClick={() => setFuente("monospace")}
          />
          <BotonIcono
            nombreBtn={"Serif"}
            icono={<RiFontSansSerif />}
            handleClick={() => setFuente("sans-serif")}
          />
          <BotonIcono
            nombreBtn={"Sans"}
            icono={<RiFontSans />}
            handleClick={() => setFuente("sans")}
          />
          <BotonIcono
            nombreBtn={"Cursiva"}
            icono={<RiFontSans />}
            handleClick={() => setFuente("cursive")}
          />
          <BotonIcono
            nombreBtn={"Impact"}
            icono={<RiFontSans />}
            handleClick={() => setFuente("impact")}
          />
        </div>
      </section>
    </div>
  );
};

const BotonIcono = ({ handleClick, nombreBtn, icono }) => {
  return (
    <button className="btn-visualizar config" onClick={handleClick}>
      <span className="btn-i">{icono}</span>
      <span>{nombreBtn}</span>
    </button>
  );
};

export default Configuration;
