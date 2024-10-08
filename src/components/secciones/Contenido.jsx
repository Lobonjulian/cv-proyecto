import "../../styles/secciones.css";
import Accordion from "../ui/Accordion";

const Contenido = ({
  education,
  cambiarEducation,
  experiencia,
  cambiarExperiencia,
  skill,
  cambiarSkill,
  idioma,
  cambiarIdioma,
  redes,
  cambiarRedes,
  abrirAccordion,
  cerrarAccordion,
}) => {
  return (
    <div className="section contenido">
      <h3 className="section-titulo">Información General</h3>
      <Accordion
        titulo="Educación"
        index={0}
        datos={education}
        cambiarDatos={cambiarEducation}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
      <Accordion
        titulo="Experiencia"
        index={1}
        datos={experiencia}
        cambiarDatos={cambiarExperiencia}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
      <Accordion
        titulo="Habilidades"
        index={2}
        datos={skill}
        cambiarDatos={cambiarSkill}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
      <Accordion
        titulo="Idioma"
        index={3}
        datos={idioma}
        cambiarDatos={cambiarIdioma}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
      <Accordion
        titulo="Redes Sociales"
        index={4}
        datos={redes}
        cambiarDatos={cambiarRedes}
        abrirAccordion={abrirAccordion}
        cerrarAccordion={cerrarAccordion}
      />
    </div>
  );
};

export default Contenido;
