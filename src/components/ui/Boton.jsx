import "../../styles/ui.css";

const Boton = ({ nombreBtn, className, handleClick}) => {
  return <button className={className} onClick={handleClick}>{nombreBtn}</button>;
};

export default Boton;
