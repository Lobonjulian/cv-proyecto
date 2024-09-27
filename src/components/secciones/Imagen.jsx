import { FcFullTrash } from "react-icons/fc";
import "../../styles/secciones.css";
const Imagen = ({ imgPerfilImagen, cambiarImgPerfilImagen }) => {
  const imageCambio = (e) => {
    if (e.target.files && e.target.files[0]) {
      cambiarImgPerfilImagen(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="section imagen">
      <h3 className="section-titulo">Imagen</h3>
      {imgPerfilImagen && (
        <div className="imagen-sec">
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
        <label className="img-perfil-label">
          <span>Agrega Una Imagen</span>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={imageCambio}
          />
          <input
            type="button"
            value="Buscar ..."
            onClick={() => document.getElementById('fileInput').click()} />
        </label>
      </form>
    </div>
  );
};

export default Imagen;
