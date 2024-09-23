import Boton from "../ui/Boton";

const EditorBotones = () => {
  const enviarEJemplo = () => {};

  const BorrarPreview = () => {};

  const Visualizar = () => {};

  return (
    <div className="nav botones">
      <Boton className="btn-borrar" nombreBtn={"Borrar Todo"} />
      <Boton className="btn-visualizar" nombreBtn={"Visualizar"} />
      <Boton className="btn-ejemplo" nombreBtn={"Ejemplo"} />
    </div>
  );
};

export default EditorBotones;
