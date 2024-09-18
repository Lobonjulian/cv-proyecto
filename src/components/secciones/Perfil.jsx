import "../../styles/secciones.css";
import InputText from "../ui/InputText";

const Perfil = () => {
  return (
    <div className="seccion">
      <h3 className="seccion-titulo">Información Personal</h3>
      <form className="perfil-formulario">
        <InputText />
        <InputText />
        <InputText />
        <InputText /> 
        <InputText />
        <InputText />
      </form>
    </div>
  );
};

export default Perfil;
