import { Navigation } from "../../../utils/datos";
import "../../styles/ui.css";

const NavSection = ({ actualNavSection, cambioLinkNavSection }) => {
  return (
    <nav className="nav navSection">
      <ul className="navSection navSection-ul">
        {Navigation.map((navegar, index) => (
          <li key={index}>
            <button
              onClick={() => cambioLinkNavSection(index)}
              className={actualNavSection}
            >
              {navegar}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavSection;
