import "../../styles/ui.css";

const Boton = ({ nombreBtn, className}) => {
  return <button className={className}>{nombreBtn}</button>;
};

export default Boton;
