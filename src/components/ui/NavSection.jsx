import "../../styles/ui.css"
const NavSection = () => {
  const Navigation = ["Perfil", "Imagen", "Contenido", "Configuración"];

  return (
    <nav className="nav navSection">
      <ul className="navSection navSection-ul">
        {Navigation.map((navegar) => {
          return <li key={navegar}><a href="#">{navegar}</a></li>;
        })}
      </ul>
    </nav>
  );
};

export default NavSection;
