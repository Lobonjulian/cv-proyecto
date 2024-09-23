import { FcFullTrash } from "react-icons/fc";
import "../../styles/secciones.css";
const Imagen = ({ imgPerfilImagen, cambiarImgPerfilImagen }) => {
  const imageCambio = (e) => {
    if (e.target.files && e.target.files[0]) {
      cambiarImgPerfilImagen(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="section">
      <h3 className="section-titulo">Imagen</h3>
      {imgPerfilImagen && (
        <div>
          <img
            src={imgPerfilImagen}
            alt="Imagen Perfil"
            className="img-perfil"
          />
          <button
            className="image-btn"
            onClick={() => cambiarImgPerfilImagen()}
          >
            <span>
              <FcFullTrash />
            </span>
          </button>
        </div>
      )}
      {!imgPerfilImagen && <p> ---No HAy Imagen--- </p>}

      <form>
        <label>
          <span>Agrega Una Imagen</span>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={imageCambio}
          />
          <input type="button" value="Buscar ..." onClick={() => Imagen.current.click()} />
        </label>
      </form>
    </div>
  );
};

export default Imagen;
