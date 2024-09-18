import { ImFacebook, ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <section className="footer-name">
        <img  src="../assets/Logo.svg" alt="elPoderDeCrear" type="svg"/>
        <p>2024 - {date} a @Julitolos</p>
      </section>
      <section className="footer-redes">
        <a href="">
          <i>
            <ImGithub />
          </i>
        </a>
        <a>
          <i>
            <ImFacebook />
          </i>
        </a>
        <a>
          <i>
            <ImTwitter />
          </i>
        </a>
        <a>
          <i>
            <ImLinkedin2 />
          </i>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
