import "../../styles/secciones.css";
import InputText from "../ui/InputText";

const Perfil = ({informationGeneral, informationManipulada}) => {
  return (
    <div className="section">
      <h3 className="section-titulo">Información Personal</h3>
      <form className="perfil-formulario">
        <InputText labelName={"Nombres:"} estado={informationGeneral.nombres} manipular={informationManipulada.manipularNombre}/>
        <InputText labelName={"Apellidos:"} estado={informationGeneral.apellidos} manipular={informationManipulada.manipularApellido} />
        <InputText labelName={"Profesión:"} estado={informationGeneral.profesion} manipular={informationManipulada.manipularProfesion} />
        <InputText labelName={"Email:"} type="email" estado={informationGeneral.correo} manipular={informationManipulada.manipularCorreo} />
        <InputText labelName={"Teléfono:"} type="tel" estado={informationGeneral.telefono} manipular={informationManipulada.manipularTelefono} />
        <InputText labelName={"Dirección:"} estado={informationGeneral.direction} manipular={informationManipulada.manipularDirection}/>
      </form>
    </div>
  );
};

export default Perfil;
