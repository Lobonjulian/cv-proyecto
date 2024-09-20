import InputText from "../ui/InputText";
import "../../styles/secciones.css";

const Perfil = ({informationGeneralPerfil, informationManipuladaPerfil}) => {
  return (
    <div className="section">
      <h3 className="section-titulo">Información Personal</h3>
      <form className="perfil-formulario">
        <InputText labelName={"Nombres:"} estado={informationGeneralPerfil.nombres} manipular={informationManipuladaPerfil.manipularNombre}/>
        <InputText labelName={"Apellidos:"} estado={informationGeneralPerfil.apellidos} manipular={informationManipuladaPerfil.manipularApellido} />
        <InputText labelName={"Profesión:"} estado={informationGeneralPerfil.profesion} manipular={informationManipuladaPerfil.manipularProfesion} />
        <InputText labelName={"Email:"} type="email" estado={informationGeneralPerfil.correo} manipular={informationManipuladaPerfil.manipularCorreo} />
        <InputText labelName={"Teléfono:"} type="tel" estado={informationGeneralPerfil.telefono} manipular={informationManipuladaPerfil.manipularTelefono} />
        <InputText labelName={"Dirección:"} estado={informationGeneralPerfil.direction} manipular={informationManipuladaPerfil.manipularDirection}/>
      </form>
    </div>
  );
};

export default Perfil;
