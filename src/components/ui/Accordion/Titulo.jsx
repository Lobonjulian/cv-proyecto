import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const Titulo = ({ titulo, index, abrirAccordion, cerrarAccordion }) => {
  const isAbrir = abrirAccordion === index;
  return (
    <h4>
      <button         
      className="btn-visualizar"
        id={titulo.toLowerCase()}
        aria-expanded={isAbrir}
        aria-controls={titulo.toLowerCase()}
        onClick={() => cerrarAccordion(index)}
      >
        {titulo}
        {isAbrir ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
      </button>
    </h4>
  );
};

export default Titulo;
